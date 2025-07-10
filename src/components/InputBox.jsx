import { useState, useEffect } from "react";

function InputBox({ onSubmit, loading }) {
  const defaultQuestion = `In a motor accident claim where the deceased was self-employed and aged 54–55 years at the time of death, is the claimant entitled to an addition towards future prospects in computing compensation under Section 166 of the Motor Vehicles Act, 1988? If so, how much?`;

  const [input, setInput] = useState("");

  useEffect(() => {
    setInput(defaultQuestion);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSubmit(input);
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 px-4 py-3 border-t bg-[#1a1a2f] border-yellow-500/20 backdrop-blur shadow-[0_0_10px_rgba(255,215,0,0.15)]"
    >
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={2}
        className="flex-1 resize-none p-3 rounded-md bg-[#101020] text-white placeholder-gray-400 border border-yellow-400/30 focus:ring-2 focus:ring-yellow-500 focus:outline-none shadow-[0_0_6px_rgba(255,215,0,0.25)]"
        placeholder="Ask a legal question..."
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-yellow-400 text-black px-5 py-2 rounded-md hover:bg-yellow-500 hover:shadow-[0_0_10px_rgba(255,255,0,0.6)] transition-all disabled:opacity-50 font-semibold"
      >
        {loading ? "Loading..." : "Submit"}
      </button>
    </form>
  );
}

export default InputBox;
