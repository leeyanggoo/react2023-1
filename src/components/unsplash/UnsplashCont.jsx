import React from "react";

const UnsplashImg = ({ image }) => {
  return (
    <a
      href={`https://unsplash.com/photos/${image.id}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={image.urls.regular} alt={image.alt_description} />
    </a>
  );
};

const UnsplashCont = ({ images }) => {
  return (
    <div className="unsplash__cont container">
      <ul>
        {images.map((image, index) => (
          <li key={index}>
            <UnsplashImg image={image} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UnsplashCont;
