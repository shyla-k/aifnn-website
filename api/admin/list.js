import { MongoClient } from "mongodb";

let cachedClient = null;

async function getMongo() {
  if (cachedClient && cachedClient.topology?.isConnected()) return cachedClient;

  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  cachedClient = client;
  return client;
}

export default async function handler(req, res) {
  if (req.query.key !== process.env.ADMIN_KEY) {
    return res.status(401).json({ ok: false, error: "Unauthorized" });
  }

  try {
    const { page = 1, limit = 50, search = "" } = req.query;
    const skip = (page - 1) * limit;

    const client = await getMongo();
    const db = client.db(process.env.MONGODB_DB);

    const filter = search
      ? {
          $or: [
            { name: { $regex: search, $options: "i" } },
            { email: { $regex: search, $options: "i" } },
            { roles: { $regex: search, $options: "i" } },
          ],
        }
      : {};

    const submissions = await db
      .collection("submissions")
      .find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit))
      .toArray();

    const total = await db.collection("submissions").countDocuments(filter);

    res.status(200).json({
      ok: true,
      submissions,
      total,
    });
  } catch (err) {
    console.error("Admin list error:", err);
    res.status(500).json({ ok: false, error: "Server error" });
  }
}
