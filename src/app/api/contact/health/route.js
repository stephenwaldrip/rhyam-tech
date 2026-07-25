import { getDb } from "@/lib/mongodb";

export async function GET() {
  if (!process.env.MONGODB_URI) {
    return Response.json(
      { ok: false, error: "MONGODB_URI is not set in .env.local" },
      { status: 503 }
    );
  }
  try {
    const db = await getDb();
    await db.command({ ping: 1 });
    const count = await db.collection("inquiries").countDocuments();
    return Response.json({ ok: true, db: db.databaseName, inquiries: count });
  } catch (err) {
    return Response.json({ ok: false, error: err.message }, { status: 500 });
  }
}