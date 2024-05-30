import React from "react";
import { Product } from "@/interface/product";

interface InvoiceItemProps {
  product: Product;
  quantity: number;
}

const InvoiceItem: React.FC<InvoiceItemProps> = ({ product, quantity }) => {
  return (
    <div className="flex justify-between border-b py-2">
      <span>{product.name}</span>
      <span>{quantity}</span>
      <span>฿{product.price.toFixed(2)}</span>
      <span>฿{(product.price * quantity).toFixed(2)}</span>
    </div>
  );
};

export default InvoiceItem;
