import './style.css'

const Input = ({ type = 'text', cls = '', plc = '', ...props }) => {
  return type === 'textarea' ? (
    <textarea
      type={type}
      className={`form-control ${cls}`}
      placeholder={plc}
      autoComplete="fasle"
      {...props}
    ></textarea>
  ) : (
    <input
      type={type}
      className={`form-control ${cls}`}
      placeholder={plc}
      autoComplete="off"
      {...props}
    />
  )
}

export default Input
