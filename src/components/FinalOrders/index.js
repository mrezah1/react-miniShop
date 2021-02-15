import Wrapper from '../../hoc/Wrapper'
import Curency from '../../util/Curency'
import Button from '../Ui/Botton'


const FinalOrders = ({ orders, total,closer,submit }) => (
  <Wrapper>
    <h4>Final Orders</h4>
    <ul className="px-2 mt-3">
      {orders.map(({ title, count }) => (
        <li key={title} className="d-flex justify-content-between pb-2 mb-1 border-bottom custom-brc">
          <span>{title}</span>
          <span>{count}</span>
        </li>
      ))}
    </ul>
    <p className="m-0 mt-4">
      Total Price :
      <strong className="pl-1 text-dark pb-1 border-dark">
        {Curency(total, true)}
      </strong>
    </p>
    <div className="text-right mt-5">
      <Button type="cancle" click={closer} cls="mr-2">
        Cancle
      </Button>
      <Button type="ok" click={submit} cls="fh">
        Submit
      </Button>
    </div>
  </Wrapper>
)

export default FinalOrders
