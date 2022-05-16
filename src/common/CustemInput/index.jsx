import style from './style.module.css'


function CostumInput({ className, id, type, minLength, maxLength, size, name, required, onChangFn, value, placeholder }) {


    return <input
        className={style.InputFill}
        id={id}
        type={type || 'text'}
        minLength={0}
        maxLength={200}
        size={size || '10'}
        name={name}
        required={required ? true : false}
        onChange={onChangFn}
        value={value}
        placeholder={placeholder}
    />
}


export default CostumInput 