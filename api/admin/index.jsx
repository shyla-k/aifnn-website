import React, { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);

  async function loadData() {
    setLoading(true);
    const res = await fetch(`/api/admin/list?key=${password}&search=${search}`);
    const json = await res.json();

    if (!json.ok) {
      alert("Invalid admin key!");
      setAuthorized(false);
      return;
    }

    setItems(json.submissions);
    setAuthorized(true);
    setLoading(false);
  }

  async function deleteItem(id) {
    if (!confirm("Delete this submission?")) return;

    const res = await fetch(`/api/admin/delete?id=${id}&key=${password}`, {
      method: "DELETE",
    });

    const json = await res.json();
    if (json.ok) loadData();
    else alert(json.error);
  }

  return (
    <div className="p-10 bg-black text-white min-h-screen">
      {!authorized ? (
        <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-xl">
          <h2 className="text-2xl mb-4 font-bold">Admin Login</h2>
          <input
            type="password"
            placeholder="Enter Admin Key"
            className="w-full p-3 bg-gray-700 rounded-md mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={loadData}
            className="bg-blue-600 px-4 py-2 rounded-md w-full"
          >
            Login
          </button>
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-6">AIFNN Submissions</h1>

          {/* search */}
          <div className="flex gap-3 mb-6">
            <input
              type="text"
              placeholder="Search name, email, roles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-3 bg-gray-800 rounded-md w-full"
            />
            <button
              className="bg-blue-600 px-4 py-2 rounded-md"
              onClick={loadData}
            >
              Search
            </button>
          </div>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="grid gap-4">
              {items.map((x) => (
                <div
                  key={x._id}
                  className="bg-gray-800 p-5 rounded-xl border border-gray-600"
                >
                  <div className="flex justify-between">
                    <h3 className="font-bold text-xl">{x.name}</h3>
                    <button
                      onClick={() => deleteItem(x._id)}
                      className="text-red-400 hover:text-red-200"
                    >
                      Delete
                    </button>
                  </div>

                  <p className="text-gray-300">
                    <strong>Email:</strong> {x.email}
                    <br />
                    <strong>Roles:</strong> {x.roles}
                    <br />
                    <strong>Experience:</strong> {x.experience}
                    <br />
                    <strong>Source:</strong> {x.source}
                    <br />
                    <strong>Date:</strong> {new Date(x.createdAt).toLocaleString()}
                  </p>

                  {x.filePath && (
                    <a
                      className="text-blue-400 underline mt-3 inline-block"
                      href={`file://${x.filePath}`}
                      target="_blank"
                    >
                      Download File
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
