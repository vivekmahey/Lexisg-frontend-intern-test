import { useState } from "react";

function InputPanel({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleSubmit = () => {
    if (!query.trim()) return;
    onSubmit(query);
    setQuery("");
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-4 px-4">
      <textarea
        rows={4}
        className="w-full p-4 rounded-lg bg-[#101020] text-white placeholder-gray-400 border border-yellow-400/30 shadow-[0_0_10px_rgba(255,215,0,0.25)] focus:outline-none focus:ring-2 focus:ring-yellow-500"
        placeholder="Ask a legal question..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="mt-2 bg-yellow-400 text-black px-5 py-2 rounded hover:bg-yellow-500 hover:shadow-[0_0_10px_rgba(255,255,0,0.6)] transition-all font-semibold"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default InputPanel;
