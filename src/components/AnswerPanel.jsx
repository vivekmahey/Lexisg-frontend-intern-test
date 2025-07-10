import { useState } from "react";
import CitationModal from "./CitationModal";

function AnswerPanel({ response, onViewPDF }) {
  const [showModal, setShowModal] = useState(false);
  if (!response) return null;

  const citation = response.citations?.[0];

  const isSimulatedCitation =
    citation?.text !== "No citation available." && citation?.link;

  return (
    <>
      <div className="bg-[#101020] text-white p-5 rounded-xl shadow-lg border border-yellow-400/30 shadow-[0_0_25px_rgba(255,215,0,0.15)] transition-all">
        <div className="mb-6">
          <p className="whitespace-pre-wrap leading-relaxed tracking-wide">
            <span className="font-semibold text-yellow-400">Answer:</span> {response.answer}
          </p>
        </div>

        {isSimulatedCitation && (
          <div className="bg-[#1a1a2e] border border-yellow-400/20 p-4 rounded-lg shadow-inner">
            <p className="text-sm italic text-yellow-200 leading-relaxed">“{citation.text}”</p>
            <button
              className="text-yellow-400 underline mt-2 hover:text-yellow-300"
              onClick={() => onViewPDF()}
            >
              View Source PDF ↗
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default AnswerPanel;
