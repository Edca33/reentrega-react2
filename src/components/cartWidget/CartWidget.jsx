import { TbBrandElectronicArts } from "react-icons/tb"
import Badge from 'react-bootstrap/Badge';

const CartWidget = ({ counter }) => {

    return (
        <div >
            <TbBrandElectronicArts color="#800080 " fontSize={'3.0rem'} />
            <Badge bg="danger">369</Badge>
        </div>
    )
}
export default CartWidget