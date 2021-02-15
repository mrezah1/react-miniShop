import './style.css'

const Main = ({ children,cls='' }) => {
  return (
    <div className={`col-12 col-md-9 mx-auto main ${cls}`}>
      {children}
    </div>
  )
}

export default Main
