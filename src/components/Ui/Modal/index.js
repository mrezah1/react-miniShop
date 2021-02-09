import Backdrop from '../Backdrop'
import Wrapper from '../../../hoc/Wrapper'
import './style.css'

const Modal = ({ closer, isShow, children }) => (
  <Wrapper>
    <Backdrop closer={closer} isShow={isShow} />
    <div
        className="myModal"
      style={{
        transform: isShow ? 'translate(-50%,-50%)' : 'translate(-50%,-100vh)',
        opacity: isShow ? '1' : '0',
      }}
    >
      {children}
    </div>    
  </Wrapper>
)

export default Modal
