import React from "react";
// import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div>
      <style>{`html,
body {
  height: 100%;
  width: 100%;
  margin: 0px;
  background: linear-gradient(90deg, rgba(47,54,64,1) 23%, rgba(24,27,32,1) 100%);
  overflow : hidden;
}

.moon {
  background: linear-gradient(90deg, rgba(208,208,208,1) 48%, rgba(145,145,145,1) 100%);
  position: absolute;
  top: -100px;
  left: -300px;
  width: 900px;
  height: 900px;
  content: '';
  border-radius: 100%;
  box-shadow: 0px 0px 30px -4px rgba(0,0,0,0.5);
}

.moon__crater {
  position: absolute;
  content: '';
  border-radius: 100%;
  background: linear-gradient(90deg, rgba(122,122,122,1) 38%, rgba(195,195,195,1) 100%);
  opacity: 0.6;
}

.moon__crater1 {
  top: 250px;
  left: 500px;
  width: 60px;
  height: 180px;
}

.moon__crater2 {
  top: 650px;
  left: 340px;
  width: 40px;
  height: 80px;
  transform: rotate(55deg);
}

.moon__crater3 {
  top: -20px;
  left: 40px;
  width: 65px;
  height: 120px;
  transform: rotate(250deg);
}

.star {
  background: grey;
  position: absolute;
  width: 5px;
  height: 5px;
  content: '';
  border-radius: 100%;
  transform: rotate(250deg);
  opacity: 0.4;
  animation-name: shimmer;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes shimmer {
  from {opacity: 0;}
  to {opacity: 0.7;}
}

.star1 {
  top: 40%;
  left: 50%;
  animation-delay: 1s;
}

.star2 {
  top: 60%;
  left: 90%;
  animation-delay: 3s;
}

.star3 {
  top: 10%;
  left: 70%;
  animation-delay: 2s;
}

.star4 {
  top: 90%;
  left: 40%;
}

.star5 {
  top: 20%;
  left: 30%;
  animation-delay: 0.5s;
}

.error {
  position: absolute;
  left: 100px;
  top: 400px;
  transform: translateY(-60%);
  font-family: 'Righteous', cursive;
  color: #363e49;
}

.error__title {
  font-size: 10em;
}

.error__subtitle {
  font-size: 2em;
}

.error__description {
  opacity: 0.5;
}

.error__button {
  min-width: 7em;
  margin-top: 3em;
  margin-right: 0.5em;
  padding: 0.5em 2em;
  outline: none;
  border: none;
  background-color: transparent;
  border-radius: 8em;
  color: #576375;
  cursor: pointer;
  transition-duration: 0.2s;
  font-size: 0.75em;
  font-family: 'Righteous', cursive;
}

.error__button:hover {
  color: #21252c;
}

.error__button--active {
  background-color: #a06ece;
  border: 2px solid ##a06ece;
  color: white;
}

.error__button--active:hover {
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.5);
  color: white;
}

.astronaut {
  position: absolute;
  width: 185px;
  height: 300px;
  left: 70%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(20deg) scale(1.2);
}

.astronaut__head {
  background-color: white;
  position: absolute;
  top: 60px;
  left: 60px;
  width: 60px;
  height: 60px;
  content: '';
  border-radius: 2em;
}

.astronaut__head-visor-flare1 {
  background-color: #7f8fa6;
  position: absolute;
  top: 28px;
  left: 40px;
  width: 10px;
  height: 10px;
  content: '';
  border-radius: 2em;
  opacity: 0.5;
}

.astronaut__head-visor-flare2 {
  background-color: #718093;
  position: absolute;
  top: 40px;
  left: 38px;
  width: 5px;
  height: 5px;
  content: '';
  border-radius: 2em;
  opacity: 0.3;
}

.astronaut__backpack {
  background-color: #bfbfbf;
  position: absolute;
  top: 90px;
  left: 47px;
  width: 86px;
  height: 90px;
  content: '';
  border-radius: 8px;
}

.astronaut__body {
  background-color: #e6e6e6;
  position: absolute;
  top: 115px;
  left: 55px;
  width: 70px;
  height: 80px;
  content: '';
  border-radius: 8px;
}

.astronaut__body__chest {
  background-color: #d9d9d9;
  position: absolute;
  top: 140px;
  left: 68px;
  width: 45px;
  height: 25px;
  content: '';
  border-radius: 6px;
}

.astronaut__arm-left1 {
  background-color: #e6e6e6;
  position: absolute;
  top: 127px;
  left: 9px;
  width: 65px;
  height: 20px;
  content: '';
  border-radius: 8px;
  transform: rotate(-30deg);
}

.astronaut__arm-left2 {
  background-color: #e6e6e6;
  position: absolute;
  top: 102px;
  left: 7px;
  width: 20px;
  height: 45px;
  content: '';
  border-radius: 8px;
  transform: rotate(-12deg);
  border-top-left-radius: 8em;
  border-top-right-radius: 8em;
}

.astronaut__arm-right1 {
  background-color: #e6e6e6;
  position: absolute;
  top: 113px;
  left: 100px;
  width: 65px;
  height: 20px;
  content: '';
  border-radius: 8px;
  transform: rotate(-10deg);
}

.astronaut__arm-right2 {
  background-color: #e6e6e6;
  position: absolute;
  top: 78px;
  left: 141px;
  width: 20px;
  height: 45px;
  content: '';
  border-radius: 8px;
  transform: rotate(-10deg);
  border-top-left-radius: 8em;
  border-top-right-radius: 8em;
}

.astronaut__arm-thumb-left {
  background-color: #e6e6e6;
  position: absolute;
  top: 110px;
  left: 21px;
  width: 10px;
  height: 6px;
  content: '';
  border-radius: 8em;
  transform: rotate(-35deg);
}

.astronaut__arm-thumb-right {
  background-color: #e6e6e6;
  position: absolute;
  top: 90px;
  left: 133px;
  width: 10px;
  height: 6px;
  content: '';
  border-radius: 8em;
  transform: rotate(20deg);
}

.astronaut__wrist-left {
  background-color: ##a06ece;
  position: absolute;
  top: 122px;
  left: 6.5px;
  width: 21px;
  height: 4px;
  content: '';
  border-radius: 8em;
  transform: rotate(-15deg);
}

.astronaut__wrist-right {
  background-color: ##a06ece;
  position: absolute;
  top: 98px;
  left: 141px;
  width: 21px;
  height: 4px;
  content: '';
  border-radius: 8em;
  transform: rotate(-10deg);
}

.astronaut__leg-left {
  background-color: #e6e6e6;
  position: absolute;
  top: 188px;
  left: 50px;
  width: 23px;
  height: 75px;
  content: '';
  transform: rotate(10deg);
}

.astronaut__leg-right {
  background-color: #e6e6e6;
  position: absolute;
  top: 188px;
  left: 108px;
  width: 23px;
  height: 75px;
  content: '';
  transform: rotate(-10deg);
}

.astronaut__foot-left {
  background-color: white;
  position: absolute;
  top: 240px;
  left: 43px;
  width: 28px;
  height: 20px;
  content: '';
  transform: rotate(10deg);
  border-radius: 3px;
  border-top-left-radius: 8em;
  border-top-right-radius: 8em;
  border-bottom: 4px solid #a06ece;
}

.astronaut__foot-right {
  background-color: white;
  position: absolute;
  top: 240px;
  left: 111px;
  width: 28px;
  height: 20px;
  content: '';
  transform: rotate(-10deg);
  border-radius: 3px;
  border-top-left-radius: 8em;
  border-top-right-radius: 8em;
  border-bottom: 4px solid #a06ece;
}
 `}</style>
      <div className="moon"></div>
      <div className="moon__crater moon__crater1"></div>
      <div className="moon__crater moon__crater2"></div>
      <div className="moon__crater moon__crater3"></div>

      <div className="star star1"></div>
      <div className="star star2"></div>
      <div className="star star3"></div>
      <div className="star star4"></div>
      <div className="star star5"></div>

      <div className="error">
        <div className="error__title">404</div>
        <div className="error__subtitle">Hmmm...</div>
        <div className="error__description">
          It looks like one of the developers fell asleep
        </div>
        <a href="/">
          <button className="error__button error__button--active">
            BACK TO HOME
          </button>
        </a>
      </div>

      <div className="astronaut">
        <div className="astronaut__backpack"></div>
        <div className="astronaut__body"></div>
        <div className="astronaut__body__chest"></div>
        <div className="astronaut__arm-left1"></div>
        <div className="astronaut__arm-left2"></div>
        <div className="astronaut__arm-right1"></div>
        <div className="astronaut__arm-right2"></div>
        <div className="astronaut__arm-thumb-left"></div>
        <div className="astronaut__arm-thumb-right"></div>
        <div className="astronaut__leg-left"></div>
        <div className="astronaut__leg-right"></div>
        <div className="astronaut__foot-left"></div>
        <div className="astronaut__foot-right"></div>
        <div className="astronaut__wrist-left"></div>
        <div className="astronaut__wrist-right"></div>

        <div className="astronaut__cord">
          <canvas id="cord" height="500px" width="500px"></canvas>
        </div>

        <div className="astronaut__head">
          <canvas id="visor" width="60px" height="60px"></canvas>
          <div className="astronaut__head-visor-flare1"></div>
          <div className="astronaut__head-visor-flare2"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
