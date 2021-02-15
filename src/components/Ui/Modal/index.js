import Backdrop from '../Backdrop'
import Wrapper from '../../../hoc/Wrapper'
import './style.css'

const Modal = ({ closer, isShow, children,cls='' }) => (
  <Wrapper>
    <Backdrop closer={closer} isShow={isShow} />
    <div className={`myModal ${cls} ${isShow && 'modal-open'}`}>{children}</div>
  </Wrapper>
)

export default Modal
