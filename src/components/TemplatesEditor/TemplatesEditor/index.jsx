import { createContext, useState } from "react"
import { CustomInput } from "../../common"
import PreviewQuestion from "./PreviewQuestion"
import ScrollBox from "./ScrollBox"
import style from './style.module.css'

export const SearchContext = createContext()

export const QuestionIdContext = createContext()

export default function TemplatesEditor() {
    const [search, setSearch] = useState('')
    const [questionId, setQuestionId] = useState('')

    return (
            <QuestionIdContext.Provider value={{ questionId, setQuestionId }}>
                <SearchContext.Provider value={{ search, setSearch }}>
                    <CustomInput placeholder={'חיפוש'} onChangFn={(e) => setSearch(e.target.value)} />
                    <div className={style.template_editor}>
                        <ScrollBox />
                        <PreviewQuestion />
                    </div>
                </SearchContext.Provider>
            </QuestionIdContext.Provider>
    )
}