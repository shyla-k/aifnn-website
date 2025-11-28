import fs from "fs";
import { MongoClient, ObjectId } from "mongodb";

let cachedClient = null;

async function getMongo() {
  if (cachedClient && cachedClient.topology?.isConnected()) return cachedClient;
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  cachedClient = client;
  return client;
}

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  if (req.query.key !== process.env.ADMIN_KEY) {
    return res.status(401).json({ ok: false, error: "Unauthorized" });
  }

  const { id } = req.query;

  try {
    const client = await getMongo();
    const db = client.db(process.env.MONGODB_DB);
    const item = await db.collection("submissions").findOne({ _id: new ObjectId(id) });

    if (!item) return res.status(404).json({ ok: false, error: "Not found" });

    // Delete local file if exists
    if (item.filePath && fs.existsSync(item.filePath)) {
      fs.unlinkSync(item.filePath);
    }

    await db.collection("submissions").deleteOne({ _id: new ObjectId(id) });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ ok: false, error: "Delete failed" });
  }
}
