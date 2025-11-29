import React from "react";
import TalentForm from "../components/TalentForm";

export default function TalentApplication() {
  return (
    <div className="pt-28 max-w-4xl mx-auto px-6 text-white">
      <h1 className="text-4xl font-bold text-blue-400 mb-4">
        Talent Application
      </h1>

      <p className="text-gray-300 mb-8">
        Submit your profile to join the AIFNN talent pool. Our team will reach
        out shortly.
      </p>

      <TalentForm />
    </div>
  );
}
