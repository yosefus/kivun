import { useState } from "react";
import style from "./style.module.css";

export default function RangQuestion(props) {
  const [rang, setrang] = useState(0);

  function onChangeInput(e) {
    setrang(e.target.value);
    const temp = { ...props.datatofill };
    temp.answer = String(e.target.value);
    props.dataChange(props.index, temp);
  }

  return (
    <div className={style.area}>
      <div className={style.txt}> {props.lquestion.name}</div>
      <img src={props.lquestion.imageSource} className={style.img} />
      <br />
      <div className={style.rangtag}>
        <input
          type="range"
          min="0"
          max="10"
          value={rang}
          onChange={onChangeInput}
        />
        <br />
        <span className={style.demo}> התוצאה היא: {rang} </span>
      </div>
      <div></div>
    </div>
  );
}
