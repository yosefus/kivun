import React, { useContext, useState } from 'react';
import styles from './style.module.css';
import CustomInput from '../../../common/CustomInput';
import CustomButton from '../../../common/CustomButton';
import CustomChackBox from '../../../common/CustomChackBox';
import { saveQuestion, updateQuestion } from '../../../functions/pollApi';
import { ReRender } from '../NewPollForm';
import { Close } from '../QuestionDisplay';

export default function LinearQuestionForm({ pollID, quest }) {
  const getPoll = useContext(ReRender);
  const [question, setQuestion] = useState(quest);
  const getClose = useContext(Close);

  const insertCheckBoxAnswers = (e) => setQuestion({ ...question, [e.target.name]: e.target.checked });

  const insertChange = (e) => setQuestion({ ...question, [e.target.name]: e.target.value });

  async function save(e) {
    e.preventDefault();
    !question._id ? await saveQuestion(question, pollID) : await updateQuestion(question, question._id);
    getPoll();
    getClose();
  }

  return (
    <form className={styles.wrapper} onSubmit={save}>
      <div className={styles.questionHead}>
        <h3>שאלה חדשה: בחירה לינארית</h3>
        <hr />
      </div>
      <div className={styles.linearQuestion}>
        <div className={styles.question}>
          <CustomInput
            name={'name'}
            required={true}
            placeholder={'כותרת השאלה העצמה'}
            onChangFn={insertChange}
            value={question.name}
          />
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
        <div className={styles.btn}>
          <CustomButton value="ביטול" func={() => (question._id ? getClose() : getPoll())} />
          <CustomButton type="submit" value={question._id ? 'עדכן' : 'שמור'} design="1" />
        </div>
      </div>
    </form>
  );
}
