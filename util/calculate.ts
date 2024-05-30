export const calculateTotal = (invoiceProducts: any) => {
  return invoiceProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
};
