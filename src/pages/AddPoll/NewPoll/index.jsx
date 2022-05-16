import style from './style.module.css';
import { CustomButton, CustomInput, CustomChackBox } from '../../../common';
import Select from 'react-select';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPoll, updatePollsHeaders } from '../../../functions/pollApi';
import { getTags } from '../../../functions/pollApi';
import { RiCloseCircleFill } from "react-icons/ri";

export default function NewPoll(props, { _id, title = '', description = '', tags = [], isTemplate = false }) {
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

  return (

    <div className={style.wrapper}>
      <div onClick={props.Modal} className={style.overlay}></div>
      <form onSubmit={save}>
        <div className={style.card}>
          <button className={style.closeBtn} onClick={props.Modal}>
            <RiCloseCircleFill />
          </button>
          <h2 className={style.h2} >יצירת סקר חדש:</h2>
          <CustomInput
            name="title"
            className={style.inputFillUpdate}
            onChangFn={Change}
            placeholder="שם הסקר"
            required="true"
            value={form.title}
          />
          <CustomInput
            name="description"
            className={style.inputFillUpdate}
            onChangFn={Change}
            placeholder="תיאור הסקר"
            required="true"
            value={form.description}
          />
          <div className={style.tag}>
            <span>תגיות:</span>
          </div>
          <div className={style.ChackBoxUpdate} >
            <CustomChackBox onChange={Change} labal="isTemplate" name="isTemplate" checked={form.isTemplate} />
          </div>
          {form.isTemplate && (<div className={style.tagsBox} >
            <Select
              defaultValue={selectedTags}
              placeholder="חפש/י"
              onChange={setSelectedTags}
              options={getTags()}
              isMulti={true}
            />
          </div>)}

          <div className={style.btn}>
            <CustomButton type="submit" value={'צור'} />
          </div>
        </div>
      </form>
    </div>
  );
}
