// /pages/admin/submissions.jsx (Next.js page)
import { useEffect, useState } from "react";

export default function AdminSubmissions() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/submissions");
      const json = await res.json();
      setItems(json.submissions || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Submissions</h1>
      {loading ? <p>Loading…</p> : (
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left">Time</th>
              <th className="text-left">Name</th>
              <th className="text-left">Email</th>
              <th className="text-left">Roles</th>
              <th className="text-left">File</th>
            </tr>
          </thead>
          <tbody>
            {items.map((s) => (
              <tr key={s._id}>
                <td>{new Date(s.createdAt).toLocaleString()}</td>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.roles}</td>
                <td>
                  {s.filePath
                    ? <a href={s.fileUrl || `file://${s.filePath}`} target="_blank" rel="noreferrer">Open</a>
                    : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="mt-6">
        <button onClick={load} className="px-3 py-2 bg-slate-700 text-white rounded">Refresh</button>
      </div>
    </div>
  );
}
