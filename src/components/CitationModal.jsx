import { motion } from "framer-motion";

export default function CitationModal({ isOpen, onClose, pdfLink }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-3xl h-[80vh] rounded-lg shadow-lg overflow-hidden"
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-semibold text-lg">Source PDF (Simulated)</h2>
          <button onClick={onClose} className="text-gray-600 text-sm">
            ✕ Close
          </button>
        </div>
        <iframe
          src={pdfLink}
          title="PDF Viewer"
          className="w-full h-full"
        ></iframe>
      </motion.div>
    </div>
  );
}
