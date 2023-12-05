import React from "react";
import s from "./Header.module.css";
import logo from "./media/images/logo.png";
import din from "./media/images/din.png";

export default function Header() {
  return (
    <div className={s.header}>
      <div className="wrapper">
        <div className={s.nav_container}>
          <img src={logo} alt="logo" />
          <div className={s.nav}>
            <p>О Нас</p>
            <p>Услуги</p>
            <p>Аренда</p>
          </div>
          <button className={s.btn}>Связаться</button>
        </div>
        <div className={s.description}>
          <div>
            <h1>Веломастерская “Велозар”</h1>
            <p>
              Мы, мастера веломастерской «Велозар», как раз те самые счастливые
              люди, которые смогли превратить свое увлечение и хобби в
              профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный
              друг приносил Вам только радость и удовольствие от езды.
            </p>
          </div>
          <img src={din} alt="din" />
        </div>
      </div>
    </div>
  );
}
