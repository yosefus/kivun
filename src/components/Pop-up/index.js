import { useContext } from 'react';
import CustomButton from '../../common/CustomButton';
import { PopMessegeContext } from '../../hooks/Store';
import styles from './style.module.css'
export default function Popup(props) {

    const Setpop = useContext(PopMessegeContext)

    return (<div className={styles.popupMessege}>
        <div className={styles.popCard}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.butt}>
                <CustomButton className={styles.confirm} func={() => props.confirm()} value={'אישור'} />
                <CustomButton className={styles.cansel} func={() => Setpop()} value={'ביטול'} />
            </div>
        </div>
    </div>
    )
}