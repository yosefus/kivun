import styles from './style.module.css';
import Login from '../../components/LoginForm'
import logo from '../../images/Kivun_Logo.png'

export default function SignUp() {
  return (
    <div className={styles.page}>
      <img className={styles.logo} src={logo} />
      <div className={styles.board}>
        <div className={styles.onBoard} >
          <Login />
        </div>
      </div>
      <div className={styles.allRights}>Created By The Kloyz Team ©</div>
    </div>
  )
}
