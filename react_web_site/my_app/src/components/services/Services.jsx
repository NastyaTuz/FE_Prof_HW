import React from "react";
import s from "./Services.module.css";

export default function Services() {
  return (
    <div className={s.services_container}>
      <div>
        <hr />
        <h3>Годовое ТО</h3>
      </div>

      <div>
        <hr />
        <h3>Выравнивание колес</h3>
      </div>

      <div>
        <hr />
        <h3>Настройка переключателей</h3>
      </div>
    </div>
  );
}
