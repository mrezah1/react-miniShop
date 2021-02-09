import './style.css'

const Backdrop = ({ closer, isShow }) => {
  const doc = document.body.classList
  isShow ? doc.add('hideSc') : doc.remove('hideSc')
  return (
    isShow && (
      <div className="backdrop custom-flex" onClick={closer}></div>
    )
  )
}
export default Backdrop
