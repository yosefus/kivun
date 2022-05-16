import React, { useState } from 'react';
import styles from './style.module.css';
import { CustomButton, CustomInput } from '../../../common';
import { saveQuestion, updateQuestion } from '../../../functions/pollApi';
import { useContext, useEffect } from 'react/cjs/react.development';
import { ReRender } from '../NewPollForm';
import { Close } from '../QuestionDisplay';
import CustomChackBox from '../../../common/CustomChackBox';

export default function OpenQuestionForm({ pollID, quest }) {
  const [question, setQuestion] = useState(quest);
  const getClose = useContext(Close);
  const getPoll = useContext(ReRender);

  const insertCheckBoxAnswers = (e) => setQuestion({ ...question, [e.target.name]: e.target.checked });

  const insertChange = (e) => setQuestion({ ...question, [e.target.name]: e.target.value });

  // useEffect(() => console.log(question), [question]);

  async function save(e) {
    e.preventDefault();
    !question._id ? await saveQuestion(question, pollID) : await updateQuestion(question, question._id);
    getClose();
    getPoll();
  }

  return (
    <form className={styles.wrapper} onSubmit={save}>
      <div className={styles.mainInput}>
        <CustomInput
          required="true"
          name={'name'}
          placeholder="כותרת השאלה עצמה"
          onChangFn={insertChange}
          value={question.name}
        />
      </div>
      <div className={styles.checkBox}>
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
      </div>

      <div className={styles.btn}>
        <CustomButton value="ביטול" func={() => (question._id ? getClose() : getPoll())} />
        <CustomButton type="submit" value={question._id ? 'עדכן' : 'שמור'} design="1" />
      </div>
    </form>
  );
}
