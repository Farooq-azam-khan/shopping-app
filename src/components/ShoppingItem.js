import React from "react";
import { Container, ListGroupItem, Button, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { addCartItemAction, reduceShopItemAction } from "../actions";

class ShoppingItem extends React.Component {
  handleCartAdd = () => {
    if (this.props.item.amount <= 0) {
      return;
    }
    const sendItem = {
      ...this.props.item,
      addedToCartDatetime: new Date()
    };
    this.props.dispatch(addCartItemAction(sendItem));
    // dispatch an action that will reduce the amount
    this.props.dispatch(reduceShopItemAction(this.props.item));
  };
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <ListGroupItem key={this.props.item.id.toString()}>
              <Row>
                <Col>
                  <h5>
                    {this.props.item.itemText}
                    <span className={"ml-3"}>{this.props.item.amount}</span>
                  </h5>
                </Col>
                <Col>
                  <h6>${this.props.item.cost}</h6>
                </Col>
                <Col>
                  <Button onClick={this.handleCartAdd} color="success">
                    Add to Cart
                  </Button>
                </Col>
              </Row>
            </ListGroupItem>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect()(ShoppingItem);
