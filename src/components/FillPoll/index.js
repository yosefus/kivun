import { Pollf } from "../../functions/Pollfunction/pollf";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
import MultiAnswer from "./multipleyAnswer";
import OpenQuestion from "./OpenQuestion/OpenQuestion";
import RangQuestion from "./OpenQuestion/RangQuestion";
import { savepolluser } from "../../functions/pollUser";
import SingleAnswer from "./singleAnswer";
import { useNavigate } from "react-router-dom";

let polluser = {
  isActive: true,
  pollID: "61f6c5040330be28cd4a53e4",
  userID: "61f6c1bd771e5eff347b22a8",
  pollStatus: "start",
  answers: [],
};

export default function Fillpoll() {
  const [datafill, setbatafill] = useState();
  const [originalpoll, setpoll] = useState();
  const navigate = useNavigate();

  function dataChange(data, index) {
    let temp = { ...datafill };
    temp.answers[index] = data;
    setbatafill({ ...temp });
  }

  useEffect(() => {
    Pollf().then((res) => {
      setpoll(res);
      const dataFill = res.questions.map((s) => ({
        questionID: s._id,
        answerID: [],
        answerText: "",
      }));
      polluser.answers = dataFill;
      setbatafill(polluser);
      console.log(originalpoll);
    });
  }, []);

  async function submitForm(e) {
    e.preventDefault();
    savepolluser(datafill);
    navigate("/");
  }

  return (
    <div className={styles.fillpoll}>
      {originalpoll && datafill && (
        <form onSubmit={submitForm} className={styles.formpoll}>
          <div className={styles.details}>
            <h1>{originalpoll.title}</h1>
            <br></br>
            <h3>{originalpoll.description}</h3>
          </div>
          {originalpoll.questions.map((q, index) => {
            if (q.questionType == "openQuestion") return <OpenQuestion questionsData={q} datachange={dataChange} index={index} dataToFill={datafill.answers[index]} />;
            if (q.questionType == "linear") return <RangQuestion questionsData={q} datachange={dataChange} index={index} dataToFill={datafill.answers[index]} />;
            if (q.questionType == "singleChoise") return <SingleAnswer questionsData={q} datachange={dataChange} index={index} dataToFill={datafill.answers[index]} />;
            if (q.questionType == "multipleChoise") return <MultiAnswer questionsData={q} datachange={dataChange} index={index} dataToFill={datafill.answers[index]} />;
          })}
          <input type={"submit"} className={styles.sumbit} />
        </form>
      )}
    </div>
  );
}
