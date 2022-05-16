import PreviewQuestion from '../../../PreviewQuestion'
import style from './QuestionItem.module.css'

export default function QuestionItem(props) {
    const { name } = props

    function showQuestion(e) {
        
    }

    return (
        <div className={style.item} onClick={showQuestion}>
            <span>{name}</span>
        </div>
    )
}