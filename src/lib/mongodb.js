import { MongoClient } from "mongodb";

// Cached connection so Next.js hot-reload (and serverless invocations) reuse
// a single client instead of opening a new pool on every request.

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "rhyam";

let cached = global._mongo;
if (!cached) cached = global._mongo = { client: null, promise: null };

export async function getDb() {
  if (!uri) throw new Error("MONGODB_URI is not set");

  if (!cached.promise) {
    cached.promise = new MongoClient(uri).connect().then((client) => {
      cached.client = client;
      return client;
    });
  }
  const client = await cached.promise;
  return client.db(dbName);
}
