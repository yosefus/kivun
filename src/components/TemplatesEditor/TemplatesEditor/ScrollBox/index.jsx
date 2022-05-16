import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import QuestionItem from './QuestionItem'
import { SearchContext } from '..'
import style from './style.module.css'

export default function ScrollBox() {
    const [templateList, setTemplateList] = useState([])
    const { search } = useContext(SearchContext)

    useEffect(() => axios.get('http://localhost:3000/api/questions/templates')
        .then(res => setTemplateList(res.data)), [])


    return (
        <div className={style.scrollbox}>
            {templateList.filter(item => item.name.includes(search)).map(item =>
                <QuestionItem key={item._id} {...item} />)}
        </div>
    )
}