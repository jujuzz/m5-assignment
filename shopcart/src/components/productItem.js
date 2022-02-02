import { useState } from "react";
import { Modal } from 'react-bootstrap';
import { ListGroupItem } from 'reactstrap';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductModal = ({
  product,
  showModal,
  handleCloseModal,
}) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{product.desc}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          className="mx-5"
          src={product.image}
          alt={product.desc}
          width="350"
        />
        <p>
          Ratings: {product.ratings}/5
        </p>
      </Modal.Body>
    </Modal>
  );
}

const EditButtons = ({
  product,
  handleEditCart,
}) => {
  return (
    <div className="addSubBtns">
      <button
        id="minusBtn"
        type="button"
        className="btn btn-light"
        style={{ marginRight: "10px" }}
        onClick={() => handleEditCart(false, product.id)}
      >
        <FontAwesomeIcon
          icon={faMinus}
          className="fas fa-sm"
        />
      </button>

      <button
        id="addBtn"
        type="button"
        className="btn btn-light"
        style={{ marginRight: "6px" }}
        onClick={() => handleEditCart(true, product.id)}
      >
        <FontAwesomeIcon
          icon={faPlus}
          className="fas fa-sm"
        />
      </button>
    </div>
  );
}

const ProductInfo = ({
  product,
  quantity,
  handleShowModal,
}) => {
  return (
    <>
      <div id="sorting" class="center-screen">
        <p>Sort Price By: 
          <span class="sort-button">
            <select
              name="sort"
              onChange={(e) => product.onSort(product, e.target.value)}>
              <option value="normal">Normal</option>
              <option value="lowest">Lowest</option>
              <option value="highest">Highest</option>
            </select>
          </span>
        </p>
      </div>
      <div>{product.desc}</div>
      <img
        onClick={() => handleShowModal(product)}
        style={{ margin: "10px 50px 10px 0", width: "150px", objectFit: "cover" }}
        className="img-fluid"
        src={product.image}
        alt={product.desc}
      />
      <div style={{ display: "inline" }} className="col-2">
        <p style={{ marginRight: "10px", width: "150px" }}>
          Quantity
        </p>
        <input
          style={{ marginRight: "10px", width: "50px", height: "50px", textAlign: "center" }}
          value={quantity}
          disabled
        />
        <div style={{ marginTop: "8px", color: "red"}} >price:${product.value}</div>
      </div>
    </>
  );
}

export const ProductItem = ({
  product,
  quantity,
  handleEditCart,
  enableEdit,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <ListGroupItem style={{ display: "flex" }} key={product.id}>
      <div className="row" style={{ padding: "30px", display: "flex" }}>
        <ProductInfo
          product={product}
          quantity={quantity}
          handleShowModal={handleShowModal}
        />
        <ProductModal
          product={product}
          showModal={showModal}
          handleCloseModal={handleCloseModal}
        />
        {enableEdit && (
          <EditButtons
            product={product}
            handleEditCart={handleEditCart}
          />
        )}
      </div>
    </ListGroupItem>
  );
}
