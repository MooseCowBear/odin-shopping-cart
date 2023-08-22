export const totalItems = (cart) => {
  return cart.reduce((acc, item) => acc + item.quantity, 0);
};

export const getUpdatedCart = (cart, newItem, quantity, price) => {
  let data = [...cart];
  const index = data.findIndex((elem) => elem.productName === newItem);
  if (index > 0) {
    const oldQuantity = data[index].quantity;
    data[index].quantity = oldQuantity + quantity;
    data[index].unitPrice = price;
  } else {
    data.push({
      productName: newItem,
      quantity: quantity,
      unitPrice: price,
    });
  }
};

export const calculatePrice = (quantity, unitPrice) => {
  return quantity * unitPrice;
};
