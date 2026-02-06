import React from "react";

export default function AccordionItem({ title, content, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-200 shadow-sm rounded-lg overflow-hidden transition-all duration-300 ease-linear">
      <button
        className={`py-3 px-5 w-full text-left font-semibold text-gray-800 bg-white focus:outline-none flex justify-between items-center ${
          isOpen ? "rounded-t-lg" : "rounded-lg"
        }`}
        onClick={onClick}
      >
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500 transition-transform duration-300 ease-in-out"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="py-4 px-12 bg-gray-50 text-gray-800 text-sm transition-all duration-300 ease-in-out">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}
