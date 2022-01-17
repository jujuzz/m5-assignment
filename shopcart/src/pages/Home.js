import { ListGroup } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { products } from "../data/products";
import { ProductItem } from "../components/productItem";

export const Home = ({
  cart,
  handleEditCart,
}) => {
  return (
    <div>
      <ListGroup>
        {products.map(product => (
          <ProductItem
            key={product.id}
            product={product}
            quantity={cart.hasOwnProperty(product.id) ? cart[product.id] : 0}
            handleEditCart={handleEditCart}
            enableEdit={true}
          />
        ))}
      </ListGroup>
    </div>
  );
}
