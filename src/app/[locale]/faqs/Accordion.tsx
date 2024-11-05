"use client";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
export function Accordion({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left text-gray-800 font-medium hover:bg-gray-100 transition-colors duration-300"
      >
        <span>{question}</span>
        <span className="text-gray-600">
          {isOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
        </span>
      </button>

      {isOpen && (
        <div className="px-4 pb-4 text-sm text-gray-600">{children}</div>
      )}
    </div>
  );
}