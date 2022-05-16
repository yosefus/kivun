import { useState } from "react";
import style from "./style.module.css";

export default function SingleAnswer(props) {
  // const [ans, setAns] = useState({ questionID: props.questionData._id, answerID: [] })

  const change = (e) => {
    let temp = { ...JSON.parse(JSON.stringify(props.dataToFill)) };
    temp.answerID[0] = e.target.id;
    props.datachange(temp, props.index);
  };

  return (
    <div className={style.board}>
      <div className={style.question}>{props.questionsData.name}</div>
      <img className={style.img} src={props.questionsData.name.imageSource} alt="" />
      <div className={style.answers}>
        {props.questionsData.answers.map((a, i) => (
          <div className={style.answer}>
            <input type={"radio"} onChange={change} name={props.questionsData._id} id={a._id} />
            <label for={a.answer}>{a.answer}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
