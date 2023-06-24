import React from "react";

const conts = [
  {
    img: "./assets/images/intro/device_1.png",
    title: "오늘의 시",
    desc: "하루 한 편, 무료 시 선물",
  },
  {
    img: "./assets/images/intro/device_2.png",
    title: "테마별 추천시",
    desc: "시요일이 엄선한 주제별 추천시",
  },
  {
    img: "./assets/images/intro/device_3.png",
    title: "검색",
    desc: "친절하고 강력한 검색 기능",
  },
  {
    img: "./assets/images/intro/device_4.png",
    title: "시요일의 선택",
    desc: "문화를 아우르는 다양한 시선",
  },
  {
    img: "./assets/images/intro/device_5.png",
    title: "선택 구절 공유",
    desc: "예쁜 이미지로 공유하는 시",
  },
  {
    img: "./assets/images/intro/device_6.png",
    title: "시낭송",
    desc: "시인의 음성으로 듣는 시",
  },
];

const Conts = ({ cont }) => {
  return (
    <li>
      <img src={cont.img} alt={cont.title} />
      <h3>{cont.title}</h3>
      <em>{cont.desc}</em>
    </li>
  );
};

const IntroCont = () => {
  return (
    <div className="intro__cont container">
      <div className="cont__box">
        <ul>
          {conts.map((cont, index) => (
            <Conts key={index} cont={cont} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IntroCont;
