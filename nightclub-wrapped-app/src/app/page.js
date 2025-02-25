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

    const filtered = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredTags(filtered.slice(0, 8));
  };

  const isTagValid = options
    .map((e) => e.toLowerCase())
    .includes(tag.toLowerCase());

  return (
    <main className={styles.main}>
      <div className="max-w-5xl px-4 py-8 flex flex-col gap-6 items-center">
        {/*^ main_content_box */}
        <h1 className="pb-1 text-5xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 px-2">
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
          onClick={(e) => {
            if (!isTagValid) {
              e.preventDefault();
            }
          }}
          href={{
            pathname: `/player`,
            query: { tag: tag },
          }}
          className={`
                  px-4 py-2 rounded-md text-l font-semibold cursor-select
                  ${
                    isTagValid
                      ? "bg-gradient-to-r from-blue-400 to-purple-600 text-white cursor-pointer"
                      : "bg-gray-500 text-gray-300 cursor-default"
                  }
                `}
        >
          Generate Nightclub Wrapped
        </Link>
      </div>
    </main>
  );
}
