import React from "react";

const XShareButton = ({ text, url }) => {
  const xShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;

  return (
    <a
      href={xShareUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center bg-[#000000] text-blue font-medium px-4 py-2 rounded-lg"
    >
        Share on X
    </a>
  );
};

export default XShareButton;