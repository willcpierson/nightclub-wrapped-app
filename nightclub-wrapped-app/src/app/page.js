"use client";
import Link from "next/link";
import React, { useState } from "react";
import players from "../data/enriched-participants";
import styles from "./Home.module.css";

export default function Home() {
  const options = [];
  for (let key in players) {
    options.push(players[key].playerGamerTag);
  }

  const [tag, setTag] = useState("");

  const [filteredTags, setFilteredTags] = useState([]);

  const handleTag = (tag) => {
    setTag(tag);
  };

  const handleTagInput = (e) => {
    setFilteredTags([]);
    const value = e.target.value;
    setTag(value);

    if (value.length < 2) return;

    setFilteredTags(
      options.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const isTagValid = options.includes(tag);

  return (
    <main className={
      styles.main
      // flex justify-center min-h-screen flex-col items-center bg-gradient-to-b from-slate-800 to-gray-900
    }
      >
      <div className="w-full max-w-5xl px-4 py-8 md:py-16 flex flex-col items-center relative">
        {/*^ main_content_box */}
        <h1 className="mb-6 md:mb-8 text-5xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 px-2 py-3">
          Nightclub Wrapped
          {/* ^title */}
        </h1>
        <div className={styles.tag_input}>
          <input
            type="text"
            placeholder="Enter your tag here"
            className={
              styles.input_box
            // flex h-10 rounded-md border px-4 py-2 text-base shadow-sm w-full border-gray-700 text-white bg-gray-800
            }
            value={tag}
            onChange={handleTagInput}
          />
          {tag && filteredTags.length > 0 && (
            <ul
              className={
                styles.dropdown_list
                // "w-full max-w-xs bg-gray-800 text-white border border-gray-700 rounded-md left-4 bottom-4 md:bottom-11 z-index-1"
              }
            >
              {filteredTags.map((option, index) => (
                <li
                  key={index}
                  className={
                    styles.dropdown_listitem
                    // " px-4 py-2 hover:bg-gray-700 cursor-pointer"
                  }
                  onClick={() => {
                    handleTag(option);
                    setFilteredTags([]);
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
        <Link
          key={tag}
          href={{
            pathname: `/player`,
            query: { tag: tag },
          }}
          className={`
                  px-6 py-3 my-2 rounded-lg text-xl font-semibold z-0
                  ${
                    isTagValid
                      ? "bg-gradient-to-r from-blue-400 to-purple-600 text-white"
                      : "bg-gray-500 text-gray-300 cursor-not-allowed"
                  }
                `}
        >
          Generate Nightclub Wrapped
        </Link>
      </div>
    </main>
  );
}
