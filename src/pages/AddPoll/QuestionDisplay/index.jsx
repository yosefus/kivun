import React, { createContext, useEffect, useState } from 'react';
import StatQuestionByQuestion from '../../../components/StatOneQuestion';
import styles from './style.module.css';
export const Close = createContext();

export default function QuestionDisplay({ data, editQuestion, saved, index }) {
  const [edit, setEdit] = useState(false);
  const [allSaved, setAllSaved] = saved;

  function getEdit() {
    if (allSaved) {
      setEdit(true);
      setAllSaved(false);
    } else {
      console.log('please close all open questions!');
    }
  }
  useEffect(() => (!data._id ? getEdit() : null), []);

  function getClose() {
    setEdit(false);
    setAllSaved(true);
  }

  return (
    <>
      {!edit ? (
        <div className={styles.item} id={`question_${index + 1}`}>
          <h5>{data.name}</h5>
          {data.isTemplate ? null : (
            <button type="button" onClick={getEdit}>
              עריכה
            </button>
          )}
        </div>
      ) : (
        <Close.Provider value={getClose}>{editQuestion(data, data.questionType)}</Close.Provider>
      )}
    </>
  );
}
