import { Link } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavBar = ({
  cart,
}) => {
  let totalQuantity = 0;
  if (Object.keys(cart).length !== 0) {
    totalQuantity = Object.values(cart).reduce((a, b) => a + b);
  }

  return (
    <div>
      <div id="header">
        <Link to="/">
          <h1>Shop to React</h1>
        </Link>
        <div
          style={{ display: "inline", fontSize: "20pt", float: "right" }}
        >
          <Link to="/Cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <div id="totalValue">
              {totalQuantity} items
            </div>
          </Link>
        </div>
      </div>
    </div >
  );
}
