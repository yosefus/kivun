import styles from './style.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-elastic-carousel';
import ReactLoading from 'react-loading';

export default function StatOpenQuestion({ id }) {

    const [question, setQuestion] = useState()

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

    return <div className={styles.card}>
        <h4>{question.name}</h4>
        <Carousel>
            {question.answers.map(text => <span>{text}</span>)}
        </Carousel>
        <a>הצג את כל התשובות</a>
    </ div>
}
