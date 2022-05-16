import React, { useEffect } from 'react';
import CustomInput from '../../common/CustomInput';
import styles from './style.module.css';
import { MdDeleteOutline } from 'react-icons/md';
import { useState } from 'react';
import CustomButton from '../../common/CustomButton';

let currQues = {
  name: '',
  answers: [{ answer: '' }, { answer: '' }],
};

export default function RegularQuestion() {
  const [quest, setquest] = useState(currQues);
  function onChang(event, index) {
    let newqouest = quest;
    newqouest.answers[index].answer = event.target.value;
    setquest({ ...newqouest });
  }
  function deletinput(index) {
    let newqouest = JSON.parse(JSON.stringify(quest));
    newqouest.answers.splice(index, 1);
    quest.answers.length > 2 ? setquest({ ...newqouest }) : setquest(quest);
  }

  function addinput() {
    let newqouest = quest;
    newqouest.answers.push({ answer: '' });
    setquest({ ...newqouest });
  }

  return (
    <div className={styles.QuestionForm}>
      <CustomInput placeholder={'הקלד את תיאור השאלה...'} />
      <div className={styles.answers}>
        {quest.answers.map((a, index) => (
          <div>
            <CustomInput
              value={quest.answers[index].answer}
              onChangFn={(event) => onChang(event, index)}
              placeholder={`תשובה מספר ${index + 1}`}
              onFocus={index === quest.answers.length - 1 ? () => addinput() : undefined}
            />
            {index !== quest.answers.length - 1 || index == 1 ? (
              <MdDeleteOutline onClick={() => deletinput(index)} />
            ) : undefined}
          </div>
        ))}
      </div>
      <div className={styles.buttons}>
        <CustomButton value={'ביטול'} />
        <input type={'submit'} className={styles.sumbit} />
      </div>
    </div>
  );
}
