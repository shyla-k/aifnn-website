import React, { useState } from "react";

export default function TalentForm() {
  const [loading, setLoading] = useState(false);

  const apiUrl =
    import.meta.env.MODE === "development"
      ? "http://localhost:3000"
      : "https://www.aifnn.com";

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const res = await fetch(`${apiUrl}/api/submit`, {
      method: "POST",
      body: formData,
    });

    const json = await res.json();
    alert(json.ok ? "Submitted successfully!" : json.error);

    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-[#0b1a2a] p-6 rounded-xl border border-blue-500/40 shadow-lg"
    >
      <h3 className="text-xl font-semibold text-blue-400 mb-2">
        Submit Your Details
      </h3>

      <input
        name="name"
        placeholder="Full Name"
        className="w-full p-2 rounded-md bg-[#0d1b2a] border border-blue-500/40 text-gray-200"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full p-2 rounded-md bg-[#0d1b2a] border border-blue-500/40 text-gray-200"
        required
      />

      <input
        name="roles"
        placeholder="Role Applying For"
        className="w-full p-2 rounded-md bg-[#0d1b2a] border border-blue-500/40 text-gray-200"
        required
      />

      <input
        name="experience"
        placeholder="Experience"
        className="w-full p-2 rounded-md bg-[#0d1b2a] border border-blue-500/40 text-gray-200"
      />

      <textarea
        name="brief"
        placeholder="Brief Summary"
        className="w-full p-2 rounded-md bg-[#0d1b2a] border border-blue-500/40 text-gray-200"
      />

      <label className="text-gray-300 text-sm">Upload Resume (optional)</label>
      <input
        type="file"
        name="file"
        className="w-full p-2 rounded-md bg-[#0d1b2a] border border-blue-500/40 text-gray-200"
      />

      <button
        disabled={loading}
        className="w-full py-2 text-blue-200 font-semibold border border-blue-500 rounded-md bg-gradient-to-b from-[#03204e] via-[#000008] to-[#03204e] hover:scale-105 transition"
      >
        {loading ? "Submitting…" : "Submit"}
      </button>
    </form>
  );
}
