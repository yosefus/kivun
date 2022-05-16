import React from 'react';
import styles from './style.module.css';
import { Link } from 'react-router-dom';
import CustomButton from '../../common/CustomButton';

export default function NotFound(props) {
  return (
    <div style={{ minHeight: '90vh' }}>
      <div className={`${styles['cont_principal']} ${styles['cont_error_active']}`}>
        <div className={styles['cont_error']}>
          <h1>{props.title}</h1>
          <p>{props.message}</p>
          <br />
          <Link to={'/'}>
            <CustomButton value={'GoBack'} />
          </Link>
        </div>
        <div className={styles['cont_aura_1']}></div>
        <div className={styles['cont_aura_2']}></div>
      </div>
    </div>
  );
}
