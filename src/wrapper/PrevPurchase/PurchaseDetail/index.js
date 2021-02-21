import { useState, useEffect } from 'react'
import Wrapper from '../../../hoc/Wrapper'
import TitlePage from '../../../components/Ui/TitlePage'
import Card from '../../../hoc/Card'
import BuyerInfo from './BuyerInfo'
import './style.css'
import PurchaseInfo from './PurchaseInfo'
import Loading from '../../../components/Ui/Loading'
import { Redirect } from 'react-router'

const PurchaseDetail = ({ match }) => {
  const [detailPurchase, setDetailPurchase] = useState(null)
  useEffect(() => {
    const query = `?orderBy="orderCode"&equalTo=${match.params.id}`
    fetch(
      'https://react-cart-bf608-default-rtdb.firebaseio.com/orders.json' +
        query,
    )
      .then((response) => response.json())
      .then((response) => {
        if (
          Object.keys(response).length < 1 ||
          response.hasOwnProperty('error')
        )
          response = '{}'
        else response = { ...Object.values(response)[0] }
        setDetailPurchase(response)
      })
      .catch((err) => setDetailPurchase('error'))
  }, [])
  let result = <Loading cls="white-loader" />
  if (detailPurchase === '{}')
    result = (
      <Redirect
        to={{
          pathname: '/404',
          state: { msg: 'Purchase' },
        }}
      />
    )
  else if (detailPurchase === 'error')
    result = (
      <Wrapper>
        <p className="alert alert-danger text-center">
          Falied to load Purchases Detail!
        </p>
      </Wrapper>
    )
  else if (detailPurchase != null)
    result = (
      <Wrapper>
        <Card cls="col-sm-9 col-md-10 col-lg-7 col-xl-5 mx-auto shadow">
          <BuyerInfo userInfo={detailPurchase['userInfo']} />
        </Card>
        <Card cls="col-sm-9 col-md-10 col-lg-8 col-xl-6 p-0 mx-auto shadow">
          <PurchaseInfo buyInfo={detailPurchase} />
        </Card>
      </Wrapper>
    )
  return (
    <Wrapper>
      <TitlePage>Purchase Deatils</TitlePage>
      {result}
    </Wrapper>
  )
}
export default PurchaseDetail
