import React from "react";

import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header
      id="header"
      className={`${props.attr[0]} ${props.attr[1]} ${props.attr[2]}`}
      aria-level="1"
    >
      <div className="header__inner container">
        <h1 className="header__logo Chosun">
          <Link to="/">
            詩요일 <em>세상의 모든 시</em>
          </Link>
        </h1>
        <nav className="header__nav" role="navigation">
          <ul>
            <li>
              <Link to="/intro">웹진 소개</Link>
            </li>
            <li>
              <Link to="/today">오늘의 시</Link>
            </li>
            <li>
              <Link to="/unsplash">사진</Link>
            </li>
            <li>
              <Link to="/movie">영화</Link>
            </li>
            <li>
              <Link to="/youtube">유튜브</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
