import React from "react";
import { connect } from "react-redux";
import CartItem from "./CarItem";
import { ListGroup, ListGroupItem, Button, Row, Col } from "reactstrap";
import { checkoutAction } from "../actions";

class CartItems extends React.Component {
  checkOut = () => {
    // dispatch an action that clears the cart
    this.props.dispatch(checkoutAction());
  };
  render() {
    const props = this.props;
    return (
      <div>
        <Row className="mt-4">
          <Col>
            <h2>My Cart</h2>
          </Col>
        </Row>
        <ListGroup>
          {props.cartItems.map(item => {
            return <CartItem item={item} />;
          })}
        </ListGroup>
        <ListGroup className="mt-2">
          <ListGroupItem key="itemTotal">
            <Row>
              <Col>
                <strong>Total: </strong>
              </Col>
              <Col>
                <strong>
                  $
                  {props.cartItems.reduce((a, b) => {
                    return a + b.cost * b.amount;
                  }, 0)}
                </strong>
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
        <Row>
          <Col>
            <Button onClick={this.checkOut} className="mt-4 mb-4" color="info">
              Proceede To Checkout
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cartItems: state.cartItems
});
export default connect(mapStateToProps)(CartItems);
