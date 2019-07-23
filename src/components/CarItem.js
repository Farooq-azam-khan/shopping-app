import React from "react";
import { ListGroupItem, Input, Container, Row, Col } from "reactstrap";
import { increaseItemQuantityAction } from "../actions";

class CartItem extends React.Component {
  state = {
    quantity: this.props.item.amount
  };
  validateIncrease = () => {
    return (
      this.state.quantity > 0 &&
      this.state.quantity < this.props.item.totalAmount
    );
  };
  dispatchQuantity = () => {
    // hand it here
    if (this.validateIncrease()) {
      const newItem = {
        ...this.props.item,
        amount: this.state.quantity
      };
      this.props.dispatch(increaseItemQuantityAction(newItem));
    }
  };
  handleQuantity = e => {
    console.log("increase/dec.");
    this.setState({ quantity: parseInt(e.target.value, 10) });
    this.dispatchQuantity();
  };
  render() {
    const props = this.props;

    return (
      <ListGroupItem key={props.item.id}>
        <Container>
          <Row>
            <Col>{props.item.itemText}</Col>
            <Col>
              {/* TODO: input for increasing and decreasing amount */}
              {/* <Input
                  onChange={this.handleQuantity}
                  type="number"
                  value={this.props.item.amount}
                /> */}
            </Col>
            <Col>
              <p>
                {this.props.item.amount} X ${props.item.cost}
              </p>
            </Col>
          </Row>
        </Container>
      </ListGroupItem>
    );
  }
}
export default CartItem;
