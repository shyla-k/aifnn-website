import React from "react";
import TalentForm from "../components/TalentForm";

export default function Careers() {
  return (
    <div className="pt-28 max-w-4xl mx-auto px-6 text-white">
      <h1 className="text-4xl font-bold text-blue-400 mb-4">Careers at AIFNN</h1>

      <p className="text-gray-300 mb-8">
        We are looking for passionate individuals. Please share your details
        below.
      </p>

      <TalentForm />
    </div>
  );
}
