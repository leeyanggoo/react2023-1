import React from "react";
import { Link } from "react-router-dom";
const MovieTag = ({ onSearch }) => {
  const onClick = (value) => onSearch(value);
  // console.log(value)
  return (
    <div className="movie__tag container">
      <ul>
        <li>
          <Link onClick={() => onClick("10749")}>로맨스영화</Link>
        </li>
        <li>
          <Link onClick={() => onClick("28")}>액션영화</Link>
        </li>
        <li>
          <Link onClick={() => onClick("35")}>코미디영화</Link>
        </li>
        <li>
          <Link onClick={() => onClick("16")}>애니메이션</Link>
        </li>
        <li>
          <Link onClick={() => onClick("27")}>공포영화</Link>
        </li>
      </ul>
    </div>
  );
};
export default MovieTag;
