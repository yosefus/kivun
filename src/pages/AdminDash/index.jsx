import React from 'react';
import { Outlet } from 'react-router-dom';

import styles from './style.module.css';

export default function AdminDash() {
  return (
    <div className={styles.wrapper}>
      <div style={{ width: '100%', height: '1500px' , backgroundColor: '#f1f7ff' }}>
        {/* צריך תיקון ה px */}
        <Outlet />
      </div>
    </div>
  );
}
