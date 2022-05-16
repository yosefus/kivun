import style from './style.module.css';
import OpenQuestionForm from '../QuestionDisplay';
import { RiCloseCircleFill } from "react-icons/ri";










/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////old
import { CustomButton, CustomInput, CustomChackBox } from '../../../common';
import Select from 'react-select';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPoll, updatePollsHeaders } from '../../../functions/pollApi';
import { getTags } from '../../../functions/pollApi';

export default function FillQuestion(props, { _id, title = '', description = '', tags = [], isTemplate = false }) {

    const [form, setForm] = useState({ title, description, tags, isTemplate });
    const [selectedTags, setSelectedTags] = useState(form.tags);

    const navigate = useNavigate();

    const Change = (e) =>
        setForm({ ...form, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });

    async function save(e) {
        e.preventDefault();

        const pollToSave = { ...form };
        pollToSave.tags = [...selectedTags];

        const res = _id ? await updatePollsHeaders(pollToSave, _id) : await createPoll(pollToSave);
        // need change to to given path + res._id
        navigate(`/admin/poll/${res._id}`);
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////old
    return (

        <div className={style.wrapper}>

            <div onClick={props.Modal} className={style.overlay}></div>

            <div className={style.card}>

                <button className={style.closeBtn} onClick={props.Modal}>
                    <RiCloseCircleFill />
                </button>

                <div>אופס... אנחנו עדיין על זה, תבוא מחר ב 10:00 </div>




            </div>

        </div>
    );
}
