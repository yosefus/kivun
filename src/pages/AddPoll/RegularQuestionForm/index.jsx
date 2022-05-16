import React, { useContext, useState, useEffect } from 'react';
import CustomInput from '../../../common/CustomInput';
import styles from './style.module.css';
import { MdDeleteOutline } from 'react-icons/md';
import CustomButton from '../../../common/CustomButton';
import { saveQuestion, updateQuestion } from '../../../functions/pollApi';
import { ReRender } from '../NewPollForm';
import { Close } from '../QuestionDisplay';
import CustomChackBox from '../../../common/CustomChackBox';

export default function RegularQuestionForm({ pollID, quest }) {
  if (!quest._id) {
    quest.answers = [{ answer: '' }, { answer: '' }];
  }

  const getPoll = useContext(ReRender);
  const [question, setQuestion] = useState(quest);
  const getClose = useContext(Close);

  const insertCheckBoxAnswers = (e) => setQuestion({ ...question, [e.target.name]: e.target.checked });
  const insertChange = (e) => setQuestion({ ...question, [e.target.name]: e.target.value });

  function insertAnswersChange(event, index) {
    let newQuest = question;
    newQuest.answers[index].answer = event.target.value;
    setQuestion({ ...newQuest });
  }

  function deleteInput(index) {
    let newQuest = JSON.parse(JSON.stringify(question));
    newQuest.answers.splice(index, 1);
    question.answers.length > 2 ? setQuestion({ ...newQuest }) : setQuestion(question);
  }

  function addInput() {
    let newQuest = question;
    newQuest.answers.push({ answer: '' });
    setQuestion({ ...newQuest });
  }

  async function save(e) {
    e.preventDefault();
    let quest = question;
    quest.answers = deleteEmpty(quest.answers);
    setQuestion({ ...quest });
    !question._id ? await saveQuestion(question, pollID) : await updateQuestion(question, question._id);
    getClose();
    getPoll();
  }

  function deleteEmpty(arr) {
    return arr.filter((i) => {
      return i.answer !== '';
    });
  }

  return (
    <form className={styles.QuestionForm} onSubmit={save}>
      <CustomInput
        name="name"
        required="true"
        placeholder={'הקלד את תיאור השאלה...'}
        value={question.name}
        onChangFn={insertChange}
      />
      <div className={styles.answers}>
        {question.answers.map((a, index, arr) => (
          <div>
            <CustomInput
              value={question.answers[index].answer}
              onChangFn={(event) => insertAnswersChange(event, index)}
              placeholder={`תשובה מספר ${index + 1}`}
              onFocus={index === arr.length - 1 ? () => addInput() : undefined}
              required={index === arr.length - 1 ? false : true}
            />
            {index !== question.answers.length - 1 || index == 1 ? (
              <MdDeleteOutline onClick={() => deleteInput(index)} />
            ) : undefined}
          </div>
        ))}
      </div>
      <CustomChackBox
        name="isRequired"
        onChange={insertCheckBoxAnswers}
        label="שאלת חובה"
        checked={question['isRequired'] || false}
      />
      <CustomChackBox
        name="isTemplate"
        onChange={insertCheckBoxAnswers}
        label="תבנית"
        checked={question['isTemplate'] || false}
      />
      <div className={styles.buttons}>
        <CustomButton value={'ביטול'} func={() => (question._id ? getClose() : getPoll())} />
        <CustomButton type="submit" value={question._id ? 'עדכן' : 'שמור'} design="1" />
      </div>
    </form>
  );
}
