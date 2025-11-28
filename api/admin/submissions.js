// /pages/api/admin/submissions.js
import { MongoClient } from "mongodb";

let cached = null;
async function getClient() {
  if (cached && cached.isConnected && cached.isConnected()) return cached;
  const client = new MongoClient(process.env.MONGODB_URI, { useUnifiedTopology: true });
  await client.connect();
  cached = client;
  return client;
}

export default async function handler(req, res) {
  // TODO: Protect this route (basic secret header or session). For now check header 'x-admin-key'.
  const adminKeyOk = req.headers["x-admin-key"] && req.headers["x-admin-key"] === process.env.ADMIN_KEY;
  if (!adminKeyOk) return res.status(401).json({ ok: false, error: "Unauthorized" });

  try {
    const client = await getClient();
    const db = client.db(process.env.MONGODB_DB);
    const subs = await db.collection("submissions").find({}).sort({ createdAt: -1 }).toArray();
    // include fileUrl (file://) for convenience
    const mapped = subs.map(s => ({
      ...s,
      fileUrl: s.filePath ? `file://${s.filePath}` : null
    }));
    res.status(200).json({ ok: true, submissions: mapped });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: "DB error" });
  }
}
