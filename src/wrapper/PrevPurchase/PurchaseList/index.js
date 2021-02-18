import PurchaseItem from '../PurchaseItem'
import GlassBox from '../../../hoc/GlassBox'

const PurchaseList = ({ purchases }) => {
  return (
    <ul>
      {purchases.map(
        ({ orderCode: code, dateTime, status, totalPrice }) => (
          <GlassBox key={code}>
            <PurchaseItem
              code={code}
              date={dateTime}
              status={status}
              totalPrice={totalPrice}
            />
          </GlassBox>
        ),
      )}
    </ul>
  )
}
export default PurchaseList
