import { useState } from "react";
import style from "./style.module.css";

export default function RangQuestion(props) {
  const [rang, setrang] = useState(0);

  function onChangeInput(e) {
    setrang(e.target.value);
    const temp = { ...props.dataToFill };
    temp.answerText = e.target.value;
    props.datachange(temp, props.index);
  }

  return (
    <div className={style.area}>
      <div className={style.txt}> {props.questionsData.name}</div>
      <img src={props.questionsData.imageSource} />
      <br />
      <div className={style.rangtag}>
        <input value={rang} type="range" min="0" max="10" onChange={onChangeInput} />
        <br />
        <span className={style.demo}> התוצאה היא: {rang} </span>
      </div>
      <div></div>
    </div>
  );
}
