"use client";
import { RootState } from "@/store/store";
import { calculateTotal } from "@/util/calculate";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

const Invoice: React.FC = () => {
  const invoiceProduct = useSelector(
    (state: RootState) => state.vendingMachine.invoiceProduct
  );
  const totalAmount = invoiceProduct.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="invoice bg-slate-50 p-5  rounded-lg w-[520px]">
      <h2 className="text-2xl font-semibold mb-4">Invoice</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Product
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Quantity
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {invoiceProduct.map((product) => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {product.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      ID: {product.id}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                ${product.price.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {product.quantity}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                ${(product.price * product.quantity).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total mt-4">
        <h3 className="text-xl font-semibold">
          Total: ${calculateTotal(invoiceProduct).toFixed(2)}
        </h3>
      </div>
    </div>
  );
};

export default Invoice;
