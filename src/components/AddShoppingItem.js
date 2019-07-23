import React from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Button,
  Input,
  InputGroupAddon
} from "reactstrap";

import { addItemAction } from "../actions";

import { connect } from "react-redux";

class AddShoppingItem extends React.Component {
  state = {
    inputText: "",
    amount: "",
    cost: ""
  };
  handleKeyPress = key => {
    if (key.charCode === 13) {
      this.addItem();
    }
  };
  handleAmountChange = e => {
    this.setState({ amount: e.target.value });
  };
  validateAmount = () => {
    return parseInt(this.state.amount, 10) > 0;
  };
  validateCost = () => {
    return parseFloat(this.state.cost, 10);
  };
  valdiateInput = () => {
    if (this.state.inputText) {
      return true;
    } else {
      return false;
    }
  };
  clearInputs = () => {
    this.setState({ inputText: "", amount: "" });
  };
  addItem = () => {
    if (this.valdiateInput() && this.validateAmount() && this.validateCost()) {
      this.props.dispatch(
        addItemAction(
          this.state.inputText,
          parseInt(this.state.amount, 10),
          parseFloat(this.state.cost, 10)
        )
      );
      this.clearInputs();
    }
  };
  handleChange = e => {
    this.setState({ inputText: e.target.value });
  };
  handleCostChange = e => {
    this.setState({ cost: e.target.value });
  };
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <Button color="primary" outline onClick={this.addItem}>
                  Add Item
                </Button>
              </InputGroupAddon>
              <Input
                type="text"
                value={this.state.inputText}
                placeholder={"Enter Item Name"}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
            </InputGroup>
            <InputGroup>
              <Input
                type="number"
                placeholder={"enter amount"}
                onKeyPress={this.handleKeyPress}
                value={this.state.amount}
                onChange={this.handleAmountChange}
              />
              <InputGroupAddon addonType="prepend">$</InputGroupAddon>
              <Input
                type="number"
                placeholder={"enter cost amount"}
                onKeyPress={this.handleKeyPress}
                value={this.state.cost}
                onChange={this.handleCostChange}
              />
            </InputGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect()(AddShoppingItem);
