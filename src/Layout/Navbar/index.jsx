import styles from './style.module.css';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { StoreContext } from '../../hooks/Store';
import CustomButton from './../../common/CustomButton/index';
import logo from '../../images/Kivun_Logo.png'


export default function Navbar() {
  const [store, setStore] = useContext(StoreContext);
  const [showMenu, setShowMenu] = useState(false);

  function logOut() {
    setShowMenu(false);
    localStorage.removeItem('user');
    setStore({ ...store, user: undefined });
  }

  return (
    <div className={styles.bar}>
      <div className={styles.burgerMenu} onClick={() => setShowMenu(!showMenu)}>
        {!showMenu ? <FiMenu /> : <FiX />}
      </div>
      <a href='/admin'>
        <img className={styles.profilePicture} src={logo} />
      </a>
      {store?.user?.permissions === 'admin' && (
        <ul
          onClick={() => setShowMenu(!showMenu)}
          className={`${styles.listOfLinks}  ${!showMenu ? undefined : styles.showMenu}`}
        >
          <Link to={'/admin'} className={styles.link}>
            בית
          </Link>

          <Link to={'admin/all-polls'} className={styles.link}>
            סקרים
          </Link>
          <Link to={'admin/users'} className={styles.link}>
            משתמשים
          </Link>
          <Link to={'admin/stats'} className={styles.link}>
            סטטיסטיקות
          </Link>
        </ul>
      )}

      {store?.user ? (
        <CustomButton className={styles.signUpOrOut} func={logOut} value={'התנתקות'} />
      ) : (
        <div></div>
        // <Link to={'/sign-up'}>
        //   <CustomButton value={'התחברות'} func={() => setShowMenu(false)} />
        // </Link>
      )}
    </div>
  );
}