import style from './Style.module.css'


export default function Chackbox({ labal, onChange }) {
    return <div className={style.chackbox1}>

        <label className={style.chackboxtxt} for="tavnit">תבנית  </label>
        <span style={{ position: "relative" }}>

            <label className={style.swich}>



                <input className={style.chackboxbtn} type='checkbox' name="tavnit" value={labal} onChange={onChange} />
                <span className={`${style.slider} ${style.round}`}  ></span>
            </label>
        </span>




    </div>
}