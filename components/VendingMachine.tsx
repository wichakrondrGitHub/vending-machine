"use client";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@nextui-org/react";
import { RootState } from "@/store/store";
import {
  addCredit,
  buyProduct,
  selectProduct,
} from "@/store/slices/vendingMachineSlice";
import { useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import { Product } from "@/interface/product";
import { motion } from "framer-motion";
import { calculateTotal } from "@/util/calculate";

const VendingMachine: React.FC = () => {
  const [isBuying, setBuying] = useState<boolean>(false);

  const { credit, isSuccess, products, selectedProduct, invoiceProduct } =
    useSelector((state: RootState) => state.vendingMachine);

  const dispatch = useDispatch();

  const handleSelectProduct = (product: Product) => {
    if (product.quantity !== 0) {
      if (credit) {
        dispatch(selectProduct(product));
      } else {
        Swal.fire({
          title: "Not enough credit",
          text: "Please add coins to continue",
          icon: "warning",
        });
      }
    }
  };

  const handleBuyProduct = () => {
    if (invoiceProduct.length > 0) {
      if (calculateTotal(invoiceProduct) <= credit) {
        dispatch(buyProduct());
        Swal.fire({
          title: "Enjoy!",
          text: "We have no change for you ah ^^`",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Not enough credit",
          text: "Please add coins to continue",
          icon: "warning",
        });
      }
    } else {
      Swal.fire({
        title: "Purchase Failed",
        text: "Your Cart Is Empty",
        icon: "warning",
      });
    }
  };

  return (
    <div className="relative flex flex-col items-center p-8 border-2 rounded-lg bg-[#23B04E] shadow-everymatrix overflow-auto h-[calc(100vh-10.0rem)]">
      <div className="text-lg font-bold text-white mb-4 absolute top-1 left-1 flex">
        <Image
          width={60}
          height={60}
          priority
          src={"/everymatrix-logo-white.svg"}
          alt="EveryMatrix Logo"
        />
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        {products.map((product) => (
          <div key={product.id} onClick={() => handleSelectProduct(product)}>
            <motion.div
              whileTap={
                product.quantity > 0
                  ? {
                      scale: 0.01,
                      rotate: 0.1,
                      borderRadius: "100%",
                    }
                  : {}
              }
              className={`flex flex-col items-center p-3 border rounded relative bg-white shadow-everymatrix ${
                product.quantity === 0 ? "bg-gray-300" : ""
              }`}
            >
              <Image
                src={product.imageUrl}
                width={50}
                height={50}
                alt={product.name}
              />
              <p className="text-base font-semibold">{product.name}</p>
              <p className="text-base font-bold">
                ฿ {product.price.toFixed(2)}
              </p>
              <p className="text-base font-bold">Remain {product.quantity}</p>

              {product.quantity === 0 && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-red-600 px-2 py-1 rounded text-sm">
                  SOLD OUT
                </div>
              )}
              <Button disableAnimation className="mt-2">
                Select
              </Button>
            </motion.div>
          </div>
        ))}
      </div>
      <div className="mt-4 justify-center flex flex-col">
        <h3>Credit: ฿{credit.toFixed(2)}</h3>
        <h3>Selected Product: {selectedProduct?.name}</h3>

        <Button onClick={handleBuyProduct} className="mt-4">
          Buy
        </Button>
      </div>
    </div>
  );
};

export default VendingMachine;
