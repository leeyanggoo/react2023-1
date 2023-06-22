import React, { useEffect, useState } from "react";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";
import YoutubeSlider from "../youtube/YoutubeSlider";
import YoutubeSearch from "../youtube/YoutubeSearch";
import YoutubeTag from "../youtube/YoutubeTag";
import YoutubeCont from "../youtube/YoutubeCont";

const YoutubePage = () => {
  const [youtubes, setYoutubes] = useState([]);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=%EB%AC%B8%ED%95%99&type=video&key=AIzaSyC5_JL1EdBzYtbTM03behVWBCGgNq_Y-18"
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log(error));
  }, []);

  const search = async (query) => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${query}&type=video&key=AIzaSyC5_JL1EdBzYtbTM03behVWBCGgNq_Y-18`
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <Contents>
        <ContTitle title="youtube" />
        <YoutubeSlider youtubes={youtubes} />
        <YoutubeSearch onSearch={search} />
        <YoutubeTag onSearch={search} />
        <YoutubeCont youtubes={youtubes} />
      </Contents>
    </>
  );
};

export default YoutubePage;
