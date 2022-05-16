import styles from './style.module.css'
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2'
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import ChartDataLabels from 'chartjs-plugin-datalabels'


export default function StatOneQuestion({ id, type }) {
console.log(id, type);
  const [question, setQuestion] = useState(false)

  useEffect(() => {
    axios.get(`http://survey-workin.herokuapp.com/api/generals/question_answers/${id}`)
      .then(res => {
        setQuestion(res.data)
        console.log('importent', res.data);
      })
  }, [])


  if (!question)
    return <div className={styles.card}>
      <ReactLoading type="bars" color="#000" height={50} width={50} />
    </div>


  const data = {
    datasets: [{
      data: [], backgroundColor: [
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
    }], labels: []
  }


  question.answers.forEach(a => {
    data.labels.push(a.text)
    console.log(data.datasets[0].data);
    data.datasets[0].data.push(a.answersSum)
  })

  return <div className={styles.card}>
    <h4>{question.name}</h4>
    <Chart type={type} data={data} plugins={[ChartDataLabels]} />
  </ div>
}
