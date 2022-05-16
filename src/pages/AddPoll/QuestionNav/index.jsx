import CustomButton from '../../../common/CustomButton';
import styles from './style.module.css';

export default function QuestionNav({ list, name, addQuestion }) {
  return (
    <div className={styles.questionNav}>
      <div className={styles.sticky}>
        <h5 className={styles.name}>{name}</h5>
        <hr />
        <div className={styles.questionList}>
          <div className={styles.questions}>
            {list.map((item, i) => {
              return (
                <div key={`que_${i}`} className={styles.question}>
                  <a href={`#question_${i + 1}`} className={styles.questionLink}>
                    שאלה {i + 1}
                  </a>
                </div>
              );
            })}
          </div>
          <div className={styles.button}>
            <CustomButton design={true} value={'הוסף שאלה'} func={addQuestion} />
          </div>
        </div>
      </div>
    </div>
  );
}
