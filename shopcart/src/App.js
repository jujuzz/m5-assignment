import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [
        {
          id: 1,
          image: "./products/cologne.jpg",
          desc: "Unisex Cologne",
          value: 1
        },
        {
          id: 2,
          image: "./products/iwatch.jpg",
          desc: "Apple iWatch",
          value: 1
        },
        {
          id: 3,
          image: "./products/mug.jpg",
          desc: "Unique Mug",
          value: 8
        },
        {
          id: 4,
          image: "./products/wallet.jpg",
          desc: "Mens Wallet",
          value: 5
        }
      ]
    };
  }

  render() {
    const itemValue = this.state.itemList.map((Value) => {
      return Value.value;
    });
    let totalValue = 0;
    for (let i = 0; i < itemValue.length; i++) {
      totalValue += itemValue[i];
    }
    itemValue.reduce((totalValue, itemValue) => totalValue + itemValue, 0);

    let shoppingItem = <Shopping shoppingList={this.state.itemList} />;

    return (
      <div className="App">
        <div id="header">
          <h1>Shop to React</h1>
          <div id="allItems">
            <FontAwesomeIcon icon={faShoppingCart} />
            <div id="totalValue"> {totalValue} </div>
            items
          </div>
        </div>
        {shoppingItem}
      </div>
    );
  }
}

function Shopping(props) {
  return (
    <ListGroup>
      {props.shoppingList.map((shoppinglist) => (
        <ListGroupItem key={shoppinglist.id}>
          <h4>{shoppinglist.desc}</h4>
          <img src={shoppinglist.image} alt="product img"></img>
          <span>{shoppinglist.value}</span>
          quantity
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

export default App;