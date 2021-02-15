import { logo as logoImg } from '../../help/images'

const Logo = ({ width, height, ...props }) => (
  <img src={logoImg} width={width} height={height} {...props} />
)

export default Logo
