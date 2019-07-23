import { combineReducers } from "redux";
import {
  ADD_LIST_ITEM,
  ADD_CART_ITEM,
  CHECKOUT,
  REDUCE_SHOP_ITEM,
  INCREASE_ITEM_QUANTITY
} from "../actions/";
const SHOPPING_ITEMS_INITIAL_STATE = [];
const SHOPPING_CART_INITIAL_STATE = [];

const containsItem = (items, item) =>
  items.map(myItem => myItem.id === item.id).includes(true);
const addItemReducer = (state, item) => {
  return [...state, item].sort((a, b) => b.datetime - a.datetime);
};

const addCardItemReducer = (state, item) => {
  if (containsItem(state, item)) {
    return state.map(myItem => {
      if (myItem.id === item.id) {
        return {
          ...myItem,
          amount: myItem.amount + 1
        };
      } else {
        return myItem;
      }
    });
  }
  return [...state, { ...item, amount: 1 }].sort(
    (a, b) => a.datetime - b.datetime
  );
};

const reduceShopItemReducer = (state, item) => {
  let newItem = {
    ...item,
    amount: item.amount - 1
  };
  return state.map(myItem => {
    if (myItem.id === item.id) {
      return newItem;
    } else {
      return myItem;
    }
  });
};

const checkoutReducer = () => [];

const increaseItemQuantityReducer = (state, item) => {
  return state.map(myItem => {
    if (item.id === myItem.id) {
      return item;
    }
    return myItem;
  });
};

const shoppingCartReducer = (state = SHOPPING_CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return addCardItemReducer(state, action.payload);
    case CHECKOUT:
      return checkoutReducer();
    case INCREASE_ITEM_QUANTITY:
      return increaseItemQuantityReducer(state, action.payload);
    default:
      return state;
  }
};

const shoppingItemsReducer = (state = SHOPPING_ITEMS_INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_LIST_ITEM:
      return addItemReducer(state, action.payload);
    case REDUCE_SHOP_ITEM:
      return reduceShopItemReducer(state, action.payload);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  shoppingItems: shoppingItemsReducer,
  cartItems: shoppingCartReducer
});

export default rootReducer;
