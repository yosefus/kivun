import React from 'react';
import styles from './style.module.css';
import { Link } from 'react-router-dom';

export default function RightAdmin() {
  return (
    <div>
      <nav className={styles.side}>
        <Link to={'/admin'}>בית</Link>
        <Link to={'all-polls'}>סקרים</Link>
        <Link to={'users'}>משתמשים</Link>
        <Link to={'stats'}>סטטיסטיקות</Link>
      </nav>
    </div>
  );
}
