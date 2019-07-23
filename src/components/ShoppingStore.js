import React from "react";
import { connect } from "react-redux";
import ShoppingItem from "./ShoppingItem";
import AddShoppingItem from "./AddShoppingItem";

// bootstrap
import { Container, Row, Col, ListGroup } from "reactstrap";
const ShoppingStore = props => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Shopping Store</h2>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <AddShoppingItem />
          <ListGroup className="mt-4">
            {props.shoppingItems.map(item => {
              return <ShoppingItem item={item} />;
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => ({
  shoppingItems: state.shoppingItems
});
export default connect(mapStateToProps)(ShoppingStore);
