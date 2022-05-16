import style from "./style.module.css";

export default function OpenQuestion(props) {
  function onChangeInput(e) {
    const temp = { ...props.datatofill };
    temp.answer = e.target.value;
    props.dataChange(props.index, temp);
  }

  return (
    <div className={style.openquestion}>
      <div className={style.txt1}> {props.oquestion.name}</div>
      <img src={props.oquestion.imageSource} className={style.img1} />
      <br />

      <textarea
        rows="10"
        cols="36"
        type="text"
        className={style.questioninput}
        onChange={onChangeInput}
        placeholder="התשובה שלך..."
      />
    </div>
  );
}
