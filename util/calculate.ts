import { Product } from "@/interface/product";

export const calculateTotal = (invoiceProducts: any) => {
  return invoiceProducts.reduce(
    (total: number, product: Product) =>
      total + product.price * product.quantity,
    0
  );
};
