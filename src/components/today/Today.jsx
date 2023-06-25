import React from "react";
import HTMLFlipBook from "react-pageflip";
import poems from "./TodayPoems";

const TodayPage = React.forwardRef(({ poem }, ref) => {
  // const content = poem.poem.split("\n").map((line, index) =>
  //   line.trim() !== "" ? (
  //     <p key={index} style={{ paddingLeft: "20px" }}>
  //       {line.trim()}
  //     </p>
  //   ) : (
  //     <p key={index}>&nbsp;</p>
  //   )
  // );
  return (
    <>
      <div className="page" data-density="hard" ref={ref}>
        <p className="SCoreDream">
          시요일 <span>{poem.date}</span>
        </p>
        <img src={poem.img} alt={poem.poet} />
        <h3>{poem.poet}</h3>
        <em>{poem.career}</em>
      </div>
      <div className="page" data-density="hard" ref={ref}>
        <h4>{poem.title}</h4>
        <strong>{poem.poet}</strong>
        <pre className="NanumM">{poem.poem}</pre>
      </div>
    </>
  );
});

const Today = () => {
  return (
    <div className="today__cont container NanumM">
      <HTMLFlipBook
        width={640}
        height={1036}
        maxShadowOpacity={0.5}
        className="flipbook"
      >
        {poems.map((poem, index) => (
          <TodayPage key={index} poem={poem} />
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default Today;
