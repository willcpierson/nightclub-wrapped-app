import React from "react";
import xIcon from "../../public/xlogo.png"

const XShareButton = ({ text, url }) => {
  const xShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;

  return (
    <a
      href={xShareUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center bg-[#000000] text-blue font-medium px-4 py-2 rounded-lg"
    >
        Share on
        <img
        src="/xlogo.png"
        alt="X Logo"
        style={{ width: '20px', height: '20px', marginRight: '8px', marginLeft: '8px' }}
      />
    </a>
  );
};

export default XShareButton;