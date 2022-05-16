import styles from './style.module.css';
import { CustomButton, CustomInput } from '../../common';
import CustomChackBox from '../../common/CustomChackBox';
import Select from 'react-select';
import { useState } from 'react';
import { addNewPoll, getTags } from '../../functions/pollApi';

export default function NewPool() {
  const [form, setForm] = useState({ title: '', description: '', isTemplate: false, tags: [] });

  const Change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  console.log(form);

  return (
    <div className={styles.board}>
      <form
        onSubmit={(e) => {
          addNewPoll(form);
          e.preventDefault();
        }}
      >
        <CustomInput name="title" onChangFn={Change} value={form.title} placeholder="שם הסקר" />
        <CustomInput
          name="description"
          onChangFn={Change}
          value={form.description}
          placeholder="תיאור הסקר"
        />
        <CustomChackBox
          name="isTemplate"
          onChange={() => setForm({ ...form, isTemplate: !form.isTemplate })}
        />

        <div>
          <span>תגיות:</span>
          <Select
            defaultValue={form.tags}
            onChange={(e) => setForm({ ...form, tags: [...form.tags, e[e.length - 1].value] })}
            options={getTags()}
            isMulti={true}
          />
        </div>

        <div className={styles.btn}>
          <CustomButton value={'ביטול '} />
          <CustomButton type={'submit'} value={'צור'} />
        </div>
      </form>
    </div>
  );
}
