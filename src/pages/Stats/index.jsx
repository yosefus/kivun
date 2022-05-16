import React from 'react';
import styles from './style.module.css';
import { Link } from 'react-router-dom';
import StatQuestionByQuestion from '../../components/StatQuestionByQuestion';
import StatOneQuestion from '../../components/StatOneQuestion';
import StatOpenQuestion from '../../components/StatOpenQuestion';
import StatLinearQuestion from '../../components/StatLinearQuestion';

export default function Stats() {
  return (
    <div className={styles.list}>
      <StatLinearQuestion id="61f6c0cd9560487e416692ea" />
      <StatQuestionByQuestion id2="61f6c0cd9560487e41669309" id1="61f6c0cd9560487e416692f0" />
      <StatLinearQuestion id="61f6c0cd9560487e41669303" />
      <StatOpenQuestion id="61f6c0cd9560487e416692fc" />
      <StatOneQuestion id="61f6c0cd9560487e41669309" type="pie" />
      <StatOneQuestion id="61f6c0cd9560487e416692f0" type="doughnut" />
      <StatOpenQuestion id="61f6c0cd9560487e416692e9" />
      <StatQuestionByQuestion id1="61f6c0cd9560487e41669309" id2="61f6c0cd9560487e416692f0" />
    </div>
  );
}
