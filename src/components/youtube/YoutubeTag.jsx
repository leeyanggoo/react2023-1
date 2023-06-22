import React from "react";

const youtubeTag = [
  { name: "react" },
  { name: "vue" },
  { name: "vite" },
  { name: "next.js" },
  { name: "javascript" },
  { name: "three.js" },
];

const YoutubeTag = ({ onSearch }) => {
  function btnClick(e) {
    onSearch(e.target.innerText);
  }
  return (
    <div className="youtube__tag">
      <div>
        {youtubeTag.map((tag, index) => (
          <button onClick={btnClick} key={index}>
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default YoutubeTag;
