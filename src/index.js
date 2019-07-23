import React from "react";
import ReactDOM from "react-dom";

// bootstrap
import { Container, Row, Col } from "reactstrap";
// store
import store from "./store";
import { Provider } from "react-redux";
// components
import ShoppingStore from "./components/ShoppingStore";
import CartItems from "./components/CartItems";
import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <Container className="App">
        <Row>
          <Col>
            <ShoppingStore />
          </Col>
        </Row>
        <Row>
          <Col>
            <CartItems />
          </Col>
        </Row>
      </Container>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
