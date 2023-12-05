import React from "react";
import s from "./Offers.module.css";
import offer from "./media/images/offer_image.png";

export default function Offers() {
  return (
    <div className={s.offer_container}>
      <div className="wrapper">
        <h2>Что мы предлагаем</h2>
        <p>
          В нашей мастерской можно выполнить комплексное техническое
          обслуживание велосипеда, ремонт и настройку всех его узлов,
          шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает
          избежать многих проблем и дорогого ремонта. Все работы выполняем
          качественно и с душой.
        </p>
      </div>

      <img src={offer} alt="offer_image" />
    </div>
  );
}
