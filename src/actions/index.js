import uuid from "uuid";
export const ADD_LIST_ITEM = "ADD_LIST_ITEM";
export const ADD_CART_ITEM = "ADD_CART_ITEM";
export const REDUCE_SHOP_ITEM = "REDUCE_SHOP_ITEM";

export const reduceShopItemAction = item => {
  return {
    type: REDUCE_SHOP_ITEM,
    payload: {
      ...item
    }
  };
};
export const addItemAction = (itemText, amount, cost) => {
  return {
    type: ADD_LIST_ITEM,
    payload: {
      id: uuid.v4(),
      itemText,
      amount,
      cost,
      totalAmount: amount,
      datetime: new Date()
    }
  };
};

export const addCartItemAction = item => {
  return {
    type: ADD_CART_ITEM,
    payload: {
      ...item
    }
  };
};

export const CHECKOUT = "CHECKOUT";
export const checkoutAction = () => {
  return {
    type: CHECKOUT,
    payload: {}
  };
};

export const INCREASE_ITEM_QUANTITY = "INCREASE_ITEM_QUANTITY";
export const increaseItemQuantityAction = item => {
  return {
    type: INCREASE_ITEM_QUANTITY,
    payload: {
      ...item
    }
  };
};
