import { useState } from "react";
import style from "./style.module.css";

export default function MultiAnswer(props) {
  // const [ans, setAns] = useState({ questionID: "", answerID: [] })

  const change = (c) => {
    const id = c.target.name;
    const temp = { ...props.dataToFill };
    temp.answerID.findIndex((a) => a === id) === -1
      ? temp.answerID.push(id)
      : temp.answerID.splice(
          temp.answerID.findIndex((a) => a === id),
          1
        );
    props.datachange(temp, props.index);
  };

  return (
    <div className={style.board}>
      <div className={style.question}>{props.questionsData.name}</div>
      <img className={style.img} src={props.questionsData.imageSource} alt="" />
      <div className={style.answers}>
        {props.questionsData.answers.map((a) => (
          <div className={style.answer}>
            <input type={"checkbox"} onChange={change} name={a._id} id={a.answer} />
            <label for={a.answer}>{a.answer}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
