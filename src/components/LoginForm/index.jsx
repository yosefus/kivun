import styles from './style.module.css';
import CostumInput from '../../common/CustemInput';
import { StoreContext } from '../../hooks/Store';
import { useContext, useState } from 'react';
import { loginCalc } from '../../functions/loginFunction';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [store, setStore] = useContext(StoreContext);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [msg, setMsg] = useState('');

  let navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await loginCalc(formData);

    if (!res.code) {
      setStore({ ...store, user: res });
      localStorage.setItem('user', JSON.stringify(res));
      navigate('/admin');
    } else {
      setFormData({ email: '', password: '' });
      setMsg('הדוא"ל או סיסמה שהזנת לא נכונים');
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <CostumInput
        placeholder={'דוא"ל או מספר טלפון'}
        name={'email'}
        onChangFn={handleChange}
        value={formData.email}
      />
      <CostumInput
        placeholder={'סיסמה'}
        name={'password'}
        onChangFn={handleChange}
        value={formData.password}
        type={'password'}
      />
      <button type={'submit'}>התחבר/י</button>
      <div className={styles.warning}>{msg}</div>
    </form>
  );
}
