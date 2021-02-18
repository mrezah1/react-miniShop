import React from 'react'
import Loading from '../../components/Ui/Loading'
import TitlePage from '../../components/Ui/TitlePage'
import GlassBox from '../../hoc/GlassBox'
import Wrapper from '../../hoc/Wrapper'
import PurchaseList from './PurchaseList'
import './style.css'

const PrevPurchase = () => {
  const [purchases, setPurchases] = React.useState(null)
  React.useEffect(() => {
    fetch('https://react-cart-bf608-default-rtdb.firebaseio.com/orders.json')
      .then((response) => response.json())
      .then((response) => {
        if (response == null) response = []
        else
          response = Object.values(response).map((purchase) => ({
            ...purchase,
          }))
        setPurchases(response)
      })
      .catch((err) => setPurchases('error'))
  }, [])
  return (
    <Wrapper>
      <TitlePage>Previous Purchases</TitlePage>
      {purchases ? (
        purchases !== 'error' ? (
          purchases.length > 0 ? (
            <Wrapper>
              <div className="bg-white row m-0 mb-3 text-left py-2 rounded d-none d-md-flex">
                <p className="m-0 col-md-3">code</p>
                <p className="m-0 col-md-3 pr-3">Date</p>
                <p className="m-0 col-md-2">status</p>
                <p className="m-0 col-md-2">price all</p>
                <p className="m-0 col-md-2">detail</p>
              </div>
              <PurchaseList purchases={purchases} />
            </Wrapper>
          ) : (
            <GlassBox>Your previous Purchase is empty!</GlassBox>
          )
        ) : (
          <p className="alert alert-danger text-center">
            Falied to load Purchases!
          </p>
        )
      ) : (
        <Loading cls="white-loader" />
      )}
    </Wrapper>
  )
}

export default PrevPurchase
