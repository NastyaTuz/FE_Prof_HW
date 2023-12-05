import React from "react";
import s from "./Rent.module.css";
import image from "./media/sales_navi.png";

export default function Rent() {
  return (
    <div className={s.rent_container}>
      <img src={image} alt="" />
      <div className="wrapper">
        <h2>Прокат велосипедов</h2>
        <p>
          У нас вы можете взять на прокат хорошо обслуженные и настроенные
          велосипеды. Как раз мы находимся в прекрасном парке!
        </p>
      </div>
    </div>
  );
}
