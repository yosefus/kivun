import style from './Style.module.css'


export default function Index({ label, onChange, name ,checked}) {
    return <div className={style.chackbox1}>
        <label className={style.chackboxtxt} for={name}>{label}  </label>
        <span style={{ position: "relative" }}>
            <label className={style.swich}>
                <input className={style.chackboxbtn} type='checkbox' name={name} onChange={onChange}  defaultChecked={checked}/>
                <span className={`${style.slider} ${style.round}`}  ></span>
            </label>
        </span>
    </div>
}