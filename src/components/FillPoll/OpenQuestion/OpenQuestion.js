

import style from './style.module.css'

export default function OpenQuestion(props) {

    function onChangeInput(e) {
        const temp = {...props.dataToFill}
        temp.answerText = e.target.value
        props.datachange( temp,props.index)
        // console.log("שאלה",temp);
    }

    return <div className={style.openquestion}>

        <div> {props.questionsData.name}</div>
        <img src={props.questionsData.imageSource} /><br />

        <textarea rows='5' type='text' className={style.questioninput} onChange={onChangeInput} placeholder='התשובה שלך...' />




    </div>

}

// {
//     "isActive": true,
//     "_id": "61f6d0d5cd1d186ad662ee80",
//     "pollID": "61f6c5040330be28cd4a53e3",
//     "userID": "61f6c1bd771e5eff347b22a8",
//     "pollStatus": "start",
//     "answers": [
//       {
//         "questionID": "61f6c0cd9560487e41669309",
//         "answerID": [
//           "61f6c0cd9560487e4166930a"
//         ],
//         "answerText": "",
//         "_id": "61f6d0d5cd1d186ad662ee81"
//       },
//       {
//         "questionID": "61f6c0cd9560487e416692f0",
//         "answerID": [
//           "61f6c0cd9560487e416692f1"
//         ],
//         "answerText": "",
//         "_id": "61f6d0d5cd1d186ad662ee82"
//       },
//       {
//         "questionID": "61f6c0cd9560487e416692ea",
//         "answerID": [],
//         "answerText": "5",
//         "_id": "61f6d0d5cd1d186ad662ee83"
//       },
//       {
//         "questionID": "61f6c0cd9560487e416692e3",
//         "answerID": [
//           "61f6c0cd9560487e416692e4",
//           "61f6c0cd9560487e416692e7",
//           "61f6c0cd9560487e416692e6"
//         ],
//         "answerText": "",
//         "_id": "61f6d0d5cd1d186ad662ee84"
//       },
//       {
//         "questionID": "61f6c0cd9560487e416692e3",
//         "answerID": [
//           "61f6c0cd9560487e416692e7"
//         ],
//         "answerText": "",
//         "_id": "61f6d0d5cd1d186ad662ee85"
//       }
//     ],
//     "__v": 0
//   },
//   {
//     "isActive": true,
//     "_id": "61f6d0d5cd1d186ad662ee86",
//     "pollID": "61f6c5040330be28cd4a53e2",
//     "userID": "61f6c1bd771e5eff347b22a5",
//     "pollStatus": "start",
//     "answers": [
//       {
//         "questionID": "61f6c0cd9560487e416692fc",
//         "answerID": [],
//         "answerText": "הייתי רוצה ללמוד את תחום הdevops ולהתמקצע בו",
//         "_id": "61f6d0d5cd1d186ad662ee87"
//       },
//       {
//         "questionID": "61f6c0cd9560487e416692f9",
//         "answerID": [
//           "61f6c0cd9560487e416692fa"
//         ],
//         "answerText": "",
//         "_id": "61f6d0d5cd1d186ad662ee88"
//       },
//       {
//         "questionID": "61f6c0cd9560487e41669309",
//         "answerID": [
//           "61f6c0cd9560487e4166930b"
//         ],
//         "answerText": "",
//         "_id": "61f6d0d5cd1d186ad662ee89"
//       }
//     ],
//     "__v": 0
//   },