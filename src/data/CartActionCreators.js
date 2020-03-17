import { ActionTypes } from "./Types";

export function addToCart(product, quantity = 1) {
  return {
    type: ActionTypes.CART_ADD,
    payload: {
      product,
      quantity
    }
  }
}

export function updateCartQuantity(product, quantity) {
  return {
    type: ActionTypes.CART_UPDATE,
    payload: {
      product,
      quantity
    }
  }
}

export function removeFromCart(product) {
  return {
    type: ActionTypes.CART_REMOVE,
    payload: product
  }
}

export function clearCart() {
  return {
    type: ActionTypes.CART_CLEAR
  }
}
