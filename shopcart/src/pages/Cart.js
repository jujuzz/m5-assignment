import { ListGroup } from 'reactstrap';
import { ProductItem } from '../components/productItem';
import { products } from "../data/products";

export const Cart = ({
  cart,
}) => {
  const cartProducts = products.filter(
    product => cart.hasOwnProperty(product.id) && cart[product.id] > 0
  ).map(product => {
    return {
      ...product,
      quantity: cart[product.id],
    }  
  });

  return (
    <div>
      <div className="my-3">
        {Object.keys(cartProducts).length === 0 ? (
          <h1 className="display-3">Cart is empty!</h1>
        ) : (
          <ListGroup>
            {cartProducts.map(product => (
              <ProductItem
                key={product.id}
                product={product}
                quantity={product.quantity}
                enableEdit={false}
              />
            ))}
          </ListGroup>
        )}
      </div>
    </div>
  );
}
