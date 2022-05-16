import styles from './style.module.css'
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2'
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import ChartDataLabels from 'chartjs-plugin-datalabels'

export default function StatQuestionByQuestion({ id1, id2 }) {

  const [question, setQuestion] = useState(false)
  useEffect(() => {
    axios.get(`http://survey-workin.herokuapp.com/api/generals/poll_with_two_questions/${id1}/${id2}`)
      .then(res => {
        setQuestion(res.data)
      })
  }, [])

  if (!question)
    return <div className={styles.card}>
      <ReactLoading type="bars" color="#000" height={50} width={50} />
    </div>

  const data = { datasets: [], labels: [] },
    color = [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderColor = [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ]


  question.answers[0].answer.forEach(a =>
    data.labels.push(a.text))

  question.answers.forEach((a, i) => {
    let temp = {
      label: a.parameter,
      data: [],
      backgroundColor: color[i],
      borderColor: borderColor[i],
      borderWidth: 1,
    }
    a.answer.forEach(ans => {
      temp.data.push(ans.answersSum)
    })
    data.datasets.push(temp)
  })

  return <div className={styles.card}>
    <h4>{question.generalQuestion.name}</h4>
    <h6>לפי:  {question.secondaryQuestion.name}</h6>
    <Chart type='bar' data={data} plugins={[ChartDataLabels]} />

  </ div>
}