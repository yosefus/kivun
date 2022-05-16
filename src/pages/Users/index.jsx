import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import AddUser from '../../components/AddUser';
import { changeUser, showUsers } from '../../functions/userApi';
// import CustomButton from '../../common/CustomButton';
import CusttomInput from '../../common/CustomInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus} from '@fortawesome/free-solid-svg-icons'



export default function Users() {
  const [Show, setShow] = useState(false)
  const [Users, setUsers] = useState([])

  useEffect(() => {
    showUsers().then(res => setUsers(res))
  }, []);

  function handleChange(e) {
    changeUser(e.target.name, { permissions: e.target.value })
  }

  return (
    <div className={styles.usersPage}>

      <div className={styles.searchAndAddUsers}>
        <CusttomInput placeholder={'חפש על פי שם ...'} className={styles.searchInput}/>
        <FontAwesomeIcon icon={faUserPlus } size={'2x'} onClick={() => setShow(!Show)}/>
      </div>

      <table className={styles.table}>

        <tr className={styles.titleOfColumns}>
          <th>שם פרטי</th>
          <th>שם משפחה</th>
          <th>אימייל</th>
          <th>פלאפון</th>
          <th>הרשאה</th>
        </tr>

        {Users.map((user) =>
          <tr className={styles['row']}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
              <select onChange={handleChange} defaultValue={user.permissions} name={`${user._id}`}>
                <option value="admin" >admin</option>
                <option value="editor">editor</option>
                <option value="viewer">viewer</option>
              </select>
            </td>
          </tr>)
        }

      </table >
    
      {Show ? <AddUser setShow={setShow} /> : ""}
    </div >
  )
}
