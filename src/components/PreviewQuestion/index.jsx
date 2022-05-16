import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import Styles from './style.module.css';
import QuestionIdContext from '../TemplatesEditor/index';
import { CustomButton } from '../../common';
import { saveQuestion } from '../../functions/pollApi';
import { SaveTemplate } from '../../pages/AddPoll/NewPollForm';

export default function PreviewQuestion(props) {
  // const [question, setQuestion] = useState({ name: "שאלה", questionType: "aaa", answers: [{ answer: "asda" }, { answer: "asda" }, { answer: "asda" }, { answer: "asda" }] })

  const [question, setQuestion] = useState({ ...props });
  const saveTemplate = useContext(SaveTemplate);
  function add(e) {
    e.preventDefault();
    saveTemplate(question._Id);
  }
  useEffect(() => console.log(question), [question]);
  if (!question) {
    return 'loading';
  }
  // const { questionId, setQuestionId } = useContext(QuestionIdContext)
  // useEffect(() => axios.get('/question').then(res => setQuestion(res.data), [questionId]))

  return (
    <div className={Styles.card}>
      <form onSubmit={add}>
        <h3>{question.name}</h3>
        <h5>{question.questionType}</h5>
        <span>:תשובות</span>
        <br />
        {
          // question.answers.map((a, i) => <> <span>{`${i + 1}. ${a.answer}`}</span> <br /></>)
        }
        <CustomButton type="submit" className={Styles.submit} value="add" design="1" />
      </form>
    </div>
  );
}
