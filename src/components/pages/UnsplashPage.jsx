import React from "react";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";
import UnsplashSlider from "../unsplash/UnsplashSlider";
import UnsplashSearch from "../unsplash/UnsplashSearch";
import UnsplashTag from "../unsplash/UnsplashTag";
import UnsplashCont from "../unsplash/UnsplashCont";

import { useState, useEffect } from "react";

const UnsplashPage = () => {
  const [images, setImages] = useState([]);
  const [sliderImages, setSliderImages] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://api.unsplash.com/search/photos?client_id=jH0imhhs5rWunB3C4xoZHkzW4cuMAi0DT3c3uBNHn54&per_page=30&query=${query}`
    )
      .then((response) => response.json())
      .then((result) => setImages(result.results))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://api.unsplash.com/photos?client_id=jH0imhhs5rWunB3C4xoZHkzW4cuMAi0DT3c3uBNHn54&per_page=30",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setImages(result))
      .catch((error) => console.log("error", error));

    fetch(
      "https://api.unsplash.com/photos?client_id=jH0imhhs5rWunB3C4xoZHkzW4cuMAi0DT3c3uBNHn54&per_page=30"
    )
      .then((response) => response.json())
      .then((result) => {
        // Filter out only horizontal images
        const horizontalImages = result.filter(
          (image) => image.width > image.height
        );
        setSliderImages(horizontalImages);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Contents title="unsplash">
        <ContTitle title="unsplash" />
        <UnsplashSlider sliderImages={sliderImages} />
        <UnsplashSearch onSearch={search} />
        <UnsplashTag onSearch={search} />
        <UnsplashCont images={images} />
      </Contents>
    </>
  );
};

export default UnsplashPage;
