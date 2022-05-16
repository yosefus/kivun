import styles from './style.module.css'
import { useContext, useState } from 'react'
import CustomInput from '../../common/CustemInput'
import CustomButton from '../../common/CustomButton'
import { addNewUser } from '../../functions/userApi'
import Popup from '../Pop-up'
import { PopMessegeContext } from '../../hooks/Store'


export default function AddUser(props) {
    const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '' })
    const Setpop = useContext(PopMessegeContext)

    function onChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function submitForm(e) {
        e.preventDefault()
        Setpop(<Popup cancel={() => setForm({ firstName: '', lastName: '', email: '', password: '' })} title="האם אתה בטוח?" confirm={() => addNewUser(form)} />)
        props.setShow(false)
    }



    function addUser(form) {
        addNewUser(form)
    }

    return <div className={styles.overBlack}>
        <div className={styles.userForm}>
            <form onSubmit={submitForm} className={form}>
                <button className={styles.eix} onClick={() => props.setShow(false)}>X</button>
                <h1>הזן פרטי משתמש חדש</h1><br></br>
                <CustomInput required={true} className={styles.input} value={form.firstName} name={'firstName'} placeholder={'שם פרטי'} onChangFn={onChange} />
                <CustomInput required={true} className={styles.input} value={form.lastName} name={'lastName'} placeholder={'שם משפחה'} onChangFn={onChange} />
                <CustomInput required={true} className={styles.input} value={form.email} name={'email'} type='email' placeholder={'כתובת  מייל'} onChangFn={onChange} />
                <CustomInput required={true} className={styles.input} value={form.phoneNumber} name={'phoneNumber'} minLength={10} placeholder={'מספר טלפון'} onChangFn={onChange} />
                <CustomInput required={true} className={styles.input} value={form.password} name={'password'} type='password' placeholder={'סיסמה'} onChangFn={onChange} /><br></br>
                <CustomButton type={'submit'} value={'שלח'} />
            </form>
        </div>
    </div>
}