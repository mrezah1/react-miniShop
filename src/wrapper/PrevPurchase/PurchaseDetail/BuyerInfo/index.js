import { man } from '../../../../help/images'
const BuyerInfo = ({ userInfo }) => {
  const { fullName, phoneNumber, address, email } = userInfo
  return (
    <div className="buyer-info">
      <p className="purchase-titleBox">Buyer Information</p>
      <div className="mt-3 d-flex align-items-center">
        <div className="wrapper-image fh">
          <img src={man} />
        </div>
        <div className="wrapper-content pl-3">
          <p className="fullName">{fullName}</p>
          <p className="mb-1 mt-2">
            <span className="text-primary">Email</span>
            <span className="spacer">:</span>
            <span>{email}</span>
          </p>
          <p className="mb-1">
            <span className="text-primary">Phone Number</span>
            <span className="spacer">:</span>
            <span>{phoneNumber}</span>
          </p>
          <p className="mb-1">
            <span className="text-primary">Address</span>
            <span className="spacer">:</span>
            <span>{address}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
export default BuyerInfo
