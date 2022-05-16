import { createContext, useState } from "react"
import { CustomInput } from "../../common"
import PreviewQuestion from "../PreviewQuestion"
import ScrollBox from "./ScrollBox"

export const SearchContext = createContext()
export const QuestionIdContext = createContext()

export default function TemplatesEditor(params) {
    const [search, setSearch] = useState('')
    const [questionId, setQuestionId] = useState()

    return (
        <QuestionIdContext.Provider value={setSearch}>
            <SearchContext.Provider value={{ questionId, setQuestionId }}>
                <CustomInput type={'search'} placeholder={'חיפוש'} onChangFn={(e) => setSearch(e.target.value)} />
                <ScrollBox />
                <PreviewQuestion />
            </SearchContext.Provider>
        </QuestionIdContext.Provider>
    )
}