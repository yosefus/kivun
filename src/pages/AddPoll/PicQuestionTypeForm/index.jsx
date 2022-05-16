import React from 'react';
import styles from './style.module.css';

export default function PicQuestionTypeForm({ func }) {
  return (
    <div className={styles.background}>
      <div className={styles.cards}>
        <div className={styles.type} onClick={() => func('singleChoise')}>
          בחירה יחידה
        </div>
        <div className={styles.type} onClick={() => func('multipleChoise')}>
          בחירה מרובה
        </div>
        <div className={styles.type} onClick={() => func('linear')}>
          לינארי
        </div>
        <div className={styles.type} onClick={() => func('openQuestion')}>
          שאלה פתוחה
        </div>
        <div className={styles.type} onClick={() => func('template')}>
          שאלה מתבנית
        </div>
      </div>
    </div>
  );
}
