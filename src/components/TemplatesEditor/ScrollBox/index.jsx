import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import QuestionItem from './QuestionItem'
import { SearchContext } from '..'
import style from './style.module.css'
import { getTemplates } from '../../../functions/pollApi'

export default function ScrollBox() {
    const [templateList, setTemplateList] = useState([])
    const { search } = useContext(SearchContext)

    async function getTemplatesList() {
        const res = await getTemplates();
        console.log(res);
        setTemplateList(res)
    }
    useEffect(getTemplatesList, [])

    if (!templateList) {
        return '!loading'
    }

    return (
        <div className={style.scrollbox}>
            {templateList.map(item =>
                <QuestionItem {...item} />)}
            {/* {templateList.filter(item => item.name.includes(search)).map(item => */}
            {/* <QuestionItem key={item._id} {...item} />)} */}
        </div>
    )
}