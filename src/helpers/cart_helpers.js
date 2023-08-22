export const totalItems = (cart) => {
  return Object.values(cart).reduce((a, c) => a + c, 0);
};

export const getUpdatedCart = (cart, newItem, quantity) => {
  let data = { ...cart };
  if (newItem in data) {
    const oldQuantity = data[newItem];
    data[newItem] = oldQuantity + quantity;
  } else {
    data[newItem] = quantity;
  }
  return data;
};
