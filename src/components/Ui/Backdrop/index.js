import './style.css'

const Backdrop = ({ closer, isShow }) => {
  // Handle show or hide scroll
  const doc = document.body.classList
  isShow ? doc.add('hideSc') : doc.remove('hideSc')
  return (
    <div
      className={`backdrop custom-flex ${!isShow && 'closed'}`}
      onClick={closer}
    ></div>
  )
}
export default Backdrop
