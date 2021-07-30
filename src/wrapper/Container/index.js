import './style.css'

const Container = ({ children, cls = '' }) => {
  return <div className={`col-12 col-md-9 mx-auto main ${cls}`}>{children}</div>
}

export default Container
