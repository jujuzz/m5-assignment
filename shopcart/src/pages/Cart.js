import { ListGroup } from 'reactstrap';
import { ProductItem } from '../components/productItem';
import { products } from "../data/products";
import { Link } from "react-router-dom";

export const Cart = ({
  cart,
}) => {
  let totalValue = 0;
  const cartProducts = products.filter(
    product => cart.hasOwnProperty(product.id) && cart[product.id] > 0
  ).map(product => {
    totalValue += cart[product.value];
    return {
      ...product,
      quantity: cart[product.id],
      value: cart[product.value]
    }
  });

  return (
    <div>
      <div className="my-3">
        {totalValue > 0 &&
          Object.keys(cartProducts).length === 0 ? (
            <h1 className="display-3">Cart is empty!</h1>
          ) : (
            <>
              <ListGroup>
                {cartProducts.map(product => (
                  <ProductItem
                    key={product.id}
                    product={product}
                    quantity={product.quantity}
                    value={product.value}
                    enableEdit={false}
                  />
                ))}
              </ListGroup>
              <Link to="/signin" className="btn btn-primary">
                Check Out
              </Link>
            </>
          )}
        {totalValue === 0 &&
          <div>
              <p>There are 0 items in your cart.</p>
              <Link to="/" className="btn btn-success">
              Continue Shopping
              </Link>
          </div>
        }
      </div>
    </div>
  );

}
