// import { useLocation } from 'react-router-dom'
import TitlePage from '../Ui/TitlePage'

const NoMatch = ({ location }) => {
  const { state = { msg: 'Page' } } = location
  return <TitlePage>Not Found {state.msg}!</TitlePage>
}
export default NoMatch
