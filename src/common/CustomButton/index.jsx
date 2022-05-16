import styles from './style.module.css';

export default function CustomButton({ design, value, func, type }) {
  design = design ? styles.buttonFill : styles.buttonEmpty;
  return (
    <button className={`${styles.generalButton} ${design} `} type={type ? type : 'button'} onClick={func}>
      {value}
    </button>
  );
}
