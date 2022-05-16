import style from './Style.module.css';

function CustomInput({ onFocus, className, type, id, size, name, required, onChangFn, value, placeholder }) {
  return (
    <input
      className={`${style.InputFill} ${className}`}
      id={id ? id : null}
      type={type || 'text'}
      minLength={0}
      maxLength={200}
      size={size ? size : '10'}
      name={name}
      required={required ? true : false}
      onChange={onChangFn}
      value={value}
      placeholder={placeholder ? placeholder : ''}
      onFocus={onFocus}
    />
  );
}

export default CustomInput;
