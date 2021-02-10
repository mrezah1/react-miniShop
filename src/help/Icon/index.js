import { ReactComponent as Delete } from '../../assets/delete.svg'
import { ReactComponent as ArrowLeft } from '../../assets/left-arrow.svg'

const iconType = {
  delete: Delete,
  arrowLeft: ArrowLeft,
}

const Icon = ({ name, ...props }) => {
  let IconComponent = iconType[name]
  return <IconComponent {...props} />
}
export default Icon
