import './style.css'

const TitlePage = ({ children,cls='' }) => (
  <h2 className={`${cls} title-page my-3 p-2 text-center`}>{children}</h2>
)
export default TitlePage