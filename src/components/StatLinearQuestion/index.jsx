import styles from './style.module.css'
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2'
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import ChartDataLabels from 'chartjs-plugin-datalabels'


export default function StatLinearQuestion({ id }) {

  const [question, setQuestion] = useState(false)

  useEffect(() => {
    axios.get(`http://survey-workin.herokuapp.com/api/generals/question_answers/${id}`)
      .then(res => {
        setQuestion(res.data)
        console.log('res data', res.data);
      })
  }, [])




  if (!question)
    return <div className={styles.card}>
      <ReactLoading type="bars" color="#000" height={50} width={50} />
    </div>


  const CreateDataForLinear = (question) => {
    const labals = ['1-3', '4-7', '8-10']

    let [qaunter1, qaunter2, qaunter3] = [0, 0, 0]
    for (const key in question.answers) {
      console.log(key);
      if (Number(key) == 1 || Number(key) == 2 || Number(key) == 3)
        qaunter1 += question.answers[key]

      if (Number(key) == 4 || Number(key) == 5 || Number(key) == 6 || Number(key) == 7)
        qaunter2 += question.answers[key]

      if (Number(key) == 8 || Number(key) == 9 || Number(key) == 10)
        qaunter3 += question.answers[key]

    }
    const res = [qaunter1, qaunter2, qaunter3]

    const data = {
      datasets: [{
        data: res, backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ]
      }], labels: [labals]
    }


    return data
  }






  return <div className={styles.card}>
    <h4>{question.name}</h4>
    <Chart type="doughnut" data={CreateDataForLinear(question)} plugins={[ChartDataLabels]} />
  </ div>
}
