import React from "react";
import Contents from "../layout/Contents";
import Slider from "../section/Slider";
import Intro from "../section/Intro";
import Portfolio from "../section/Portfolio";
import Youtube from "../section/Youtube";
import Unsplash from "../section/Unsplash";
import Movie from "../section/Movie";

const Home = () => {
  return (
    <>
      <Contents>
        <Slider attr={"slider__wrap NanumM"} />
        <Intro attr={"intro__wrap bg-blue section SCoreDream"} />
        <Portfolio attr={"port__wrap section center"} />
        <Youtube attr={["youtube__wrap", "section", "NanumM"]} />
        <Unsplash attr={["unsplash__wrap", "section", "bg-blue", "NanumM"]} />
        <Movie attr={["movies__wrap", "section", "NanumM"]} />
      </Contents>
    </>
  );
};

export default Home;
