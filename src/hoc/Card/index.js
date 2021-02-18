import './style.css'

const Card = ({ cls = '', children }) => (
  <div className={`card ${cls} my-3 bg-white py-2 px-3`}>{children}</div>
)
export default Card
