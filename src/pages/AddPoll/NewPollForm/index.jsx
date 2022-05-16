import React, { createContext, useEffect, useState } from 'react';
import style from './style.module.css';
import { CustomInput } from '../../../common';
import CustomButton from '../../../common/CustomButton';

import QuestionNav from '../QuestionNav';
import { getOnePoll, saveQuestion } from '../../../functions/pollApi';
import PicQuestionTypeForm from '../PicQuestionTypeForm';
import RegularQuestionForm from '../RegularQuestionForm';
import LinearQuestionForm from '../LinearQuestionForm';
import OpenQuestionForm from '../OpenQuestionForm';
import QuestionDisplay from '../QuestionDisplay';
import { useParams } from 'react-router-dom';
import NewPoll from '../NewPoll';
import TemplatesEditor from './../../../components/TemplatesEditor/index';
import FillQuestion from '../FillQuestion';

export const ReRender = createContext();
export const SaveTemplate = createContext();





export default function NewPollForm() {

  useEffect(() => { getOnePoll(params.id).then(setPoll) }, [])

  const params = useParams();
  ///////////////////////////////////////////// the poll data
  const [poll, setPoll] = useState([]);
  ///////////////////////////////////////////// the questions poll data
  const questionsList = poll.questions || [];



  console.log(questionsList);

  const Change = (e) =>
    setPoll({ ...poll, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });




  function isTrue(is) {
    if (is) return (``)
    else return (`לא`)
  }

  ///////////////////////////////////////////////////////// popup func
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }




  return (
    <div className={style.main} >

      {modal && (<div className={style.popup}><FillQuestion Modal={toggleModal} /></div>)}

      <div className={style.navQuest} >

      </div>

      {/* ///////////////////////////////////////////// buttons - save, edit, add
      <div className={style.addquest} >
        <span onClick={() => toggleModal()} design={false} value={'הוסף שאלה'} >
          <CustomButton design={false} value={'הוסף שאלה'} />
        </span>
      </div>

      <div className={style.saveButton} >
        <CustomButton design={false} value={'שמור'} />
      </div>

      <div className={style.editButton} >
        <CustomButton design={false} value={'עריכה'} />
      </div> */}

      {/* ////////////////////////////////////////////////// box questions/details */}

      <div className={style.questionsList} >

        <div className={style.detailBox} >
          <li>
            <h2>פרטי הסקר: </h2>
            <ul>{poll.title}</ul>
            <ul>{poll.description}</ul>
            <ul></ul>
          </li>
        </div>


        {questionsList.map((e, index) => (
          <span onClick={() => toggleModal()} design={false} value={'הוסף שאלה'} >
          <div className={style.singleBox} >

            <li>

              <h2>{`שאלה: ${index + 1}`}</h2>
              <br />
              <h2>{e.name}</h2>
              <img src={e.imageSource} alt="" />
              <ul>{`${isTrue(e.isRequired)} חובה`}</ul>
              <ul>{`${isTrue(e.isActive)} שאלה פעילה`}</ul>
              <ul>{`${isTrue(e.isTemplate)} שאלה מתבנית`}</ul>
              <ul>{`סוג שאלה: ${e.questionType}`}</ul>
              <ul>{`מס' שאלה: ${e._id}`}</ul>

            </li>

            <CustomButton design={false} value={'עריכה'} />

            <div>

              {/* answers */}
            </div>

          </div>

          </span>
        ))}


      </div>



    </div>
  );
}

