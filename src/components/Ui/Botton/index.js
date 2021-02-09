import './style.css'

const Button= ({ children, type,click, cls='' }) => (
  <button onClick={click} className={`custom-button ${type} ${cls}`}>{children}</button>
)

export default Button
