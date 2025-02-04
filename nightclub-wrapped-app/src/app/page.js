"use client";
import Link from "next/link";
import React, { useState } from 'react';

export default function Home() {
  const options = ["Triple C", "Jkiller", "Triple Mx"];

  const [tag, setTag] = useState('');

  const [filteredTags, setFilteredTags] = useState(options);

  const handleTagInput = (e) => {
    const value = e.target.value;
    setTag(value);

    const filtered = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredTags(filtered);
  };

  const isTagValid = options.includes(tag);

  return (
    <main className="flex justify-center min-h-screen flex-col items-center bg-gradient-to-b from-slate-800 to-gray-900">
      <div className="w-full max-w-5xl px-4 py-8 md:py-16 flex flex-col items-center relative">
        <h1 className="mb-6 md:mb-8 text-5xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 px-2 py-3">Nightclub Wrapped</h1>
        {/* <form className="w-full max-w-md space-y-4 px-4"> */}
        <input 
          type="text" 
          placeholder="Enter your tag here" 
          className="flex h-10 rounded-md border px-4 py-2 text-base shadow-sm w-full border-gray-700 text-white bg-gray-800"
          value={tag}
          onChange={(handleTagInput)}
        />
        {tag && filteredTags.length > 0 && (
          <ul className="w-full max-w-xs bg-gray-800 text-white border border-gray-700 rounded-md absolute left-4 bottom-4 md:bottom-11">
            {filteredTags.map((option, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                onClick={() => {
                  setTag(option);
                  setFilteredTags([]);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
        <Link
                key={tag}
                // href={`/player?tag=${encodeURIComponent(tag)}`}
                href={{
                  pathname: `/player`,
                  query: {tag: tag}
                }}
                className={`
                  px-6 py-3 my-2 rounded-lg text-xl font-semibold 
                  ${isTagValid ? 'bg-gradient-to-r from-blue-400 to-purple-600 text-white' : 'bg-gray-500 text-gray-300 cursor-not-allowed'}
                `}
          >
            Generate Nightclub Wrapped
          </Link>
      </div>
    </main>
  );
}
