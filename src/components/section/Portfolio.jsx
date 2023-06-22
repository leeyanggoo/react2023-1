import React from "react";

const Portfolio = (props) => {
  return (
    <section id="portSection" className={props.attr}>
      <h3>
        오늘의 시<em>詩</em>
      </h3>
      <p>당신을 위한 시詩 한 편</p>
      <div className="port__inner container">
        <div className="port__btn">
          <a href="/" className="active">
            月
          </a>
          <a href="/">火</a>
          <a href="/">水</a>
          <a href="/">木</a>
          <a href="/">金</a>
          <a href="/">土</a>
          <a href="/">日</a>
        </div>
        <div className="port__cont">
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/port/today01.png" alt="포트폴리오" />
            </figure>
            <div className="port__body">
              <span>
                <img src="./assets/images/member/peep-4.svg" alt="멤버" />
              </span>
              <div>
                <h4>
                  김덕배 <em>시인</em>
                </h4>
                <p>나의 밤은 당신의 낮보다 아름답다</p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/port/today02.png" alt="포트폴리오" />
            </figure>
            <div className="port__body">
              <span>
                <img src="./assets/images/member/peep-5.svg" alt="멤버" />
              </span>
              <div>
                <h4>
                  김덕배 <em>시인</em>
                </h4>
                <p>잊혀진 도시의 목소리</p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/port/today03.png" alt="포트폴리오" />
            </figure>
            <div className="port__body">
              <span>
                <img src="./assets/images/member/peep-6.svg" alt="멤버" />
              </span>
              <div>
                <h4>
                  김덕배 <em>시인</em>
                </h4>
                <p>별빛 아래, 그리움이 선물하는 것들</p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/port/today04.png" alt="포트폴리오" />
            </figure>
            <div className="port__body">
              <span>
                <img src="./assets/images/member/peep-7.svg" alt="멤버" />
              </span>
              <div>
                <h4>
                  김덕배 <em>시인</em>
                </h4>
                <p>햇살이 부서진 그 곳에서</p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/port/today05.png" alt="포트폴리오" />
            </figure>
            <div className="port__body">
              <span>
                <img src="./assets/images/member/peep-8.svg" alt="멤버" />
              </span>
              <div>
                <h4>
                  김덕배 <em>시인</em>
                </h4>
                <p>눈물로 쓰여진 희망의 노래</p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/port/today06.png" alt="포트폴리오" />
            </figure>
            <div className="port__body">
              <span>
                <img src="./assets/images/member/peep-9.svg" alt="멤버" />
              </span>
              <div>
                <h4>
                  김덕배 <em>시인</em>
                </h4>
                <p>그대를 향한 미완성의 서정시</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
