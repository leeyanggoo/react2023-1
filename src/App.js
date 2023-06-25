import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import IntroPage from "./components/pages/IntroPage";
import TodayPage from "./components/pages/TodayPage";
import YoutubePage from "./components/pages/YoutubePage";
import MoviePage from "./components/pages/MoviePage";
import UnsplashPage from "./components/pages/UnsplashPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header attr={["header__wrap", "bg-blue", "NanumM"]} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/today" element={<TodayPage />} />
        <Route path="/youtube" element={<YoutubePage />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/unsplash" element={<UnsplashPage />} />
      </Routes>
      <Footer attr={["footer__wrap", "section", "bg-blue", "NanumM"]} />
    </BrowserRouter>
  );
};

export default App;
