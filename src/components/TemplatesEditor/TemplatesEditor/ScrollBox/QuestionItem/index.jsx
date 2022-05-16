import style from './QuestionItem.module.css'
import { QuestionIdContext } from '../..'
import { useContext } from 'react'

export default function QuestionItem({ name, _id }) {
    const { setQuestionId } = useContext(QuestionIdContext)

    return (
        <div className={style.item} onClick={() => setQuestionId(_id)}>
            <span>{name}?</span>
        </div>
    )
}