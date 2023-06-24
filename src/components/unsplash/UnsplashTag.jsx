import React from "react";
import { Link } from "react-router-dom";

const UnsplashTag = ({ onSearch }) => {
  const onClick = (value) => onSearch(value);
  return (
    <div className="unplash__tag container">
      <ul>
        <li>
          <Link onClick={() => onClick("wallpapers")}>배경화면</Link>
        </li>
        <li>
          <Link onClick={() => onClick("3d-renders")}>3D 렌더링</Link>
        </li>
        <li>
          <Link onClick={() => onClick("nature")}>자연</Link>
        </li>
        <li>
          <Link onClick={() => onClick("animals")}>동물</Link>
        </li>
        <li>
          <Link onClick={() => onClick("film")}>필름</Link>
        </li>
      </ul>
    </div>
  );
};

export default UnsplashTag;
