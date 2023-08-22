export const totalItems = (cart) => {
  return cart.reduce((acc, item) => acc + item.quantity, 0);
};

export const getUpdatedCart = (
  cart,
  newItem,
  quantity,
  price,
  replace = false
) => {
  let data = [...cart];
  const index = data.findIndex((elem) => elem.productName === newItem);

  if (index > -1 || replace) {
    const oldQuantity = replace ? 0 : data[index].quantity;
    data[index].quantity = oldQuantity + quantity;
    data[index].unitPrice = price;
  } else {
    data.push({
      productName: newItem,
      quantity: quantity,
      unitPrice: price,
    });
  }
  return data;
};

export const calculatePrice = (quantity, unitPrice) => {
  return quantity * unitPrice;
};

export const calculateSubtotal = (cart) => {
  return cart.reduce((acc, item) => acc + item.quantity * item.unitPrice, 0);
};
