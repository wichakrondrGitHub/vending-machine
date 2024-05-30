"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { addCredit } from "@/store/slices/vendingMachineSlice";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";

import Image from "next/image";

const Wallet: React.FC = () => {
  const dispatch = useDispatch();

  const handleAddCredit = (amount: number) => {
    dispatch(addCredit(amount));
  };

  return (
    <div className=" gap-5 m-3 flex  flex-col items-center p-5 bg-amber-950 rounded-lg  text-white relative shadow-everymatrix">
      <div className="w-full flex justify-between items-center mb-4">
        <div className="text-lg font-bold border-b border-white">My Wallet</div>
      </div>
      <div className=" border-t border-white shadow-black shadow-[0_5px_60px_-15px_rgba(0,0,0,0.3)] rounded-lg h-16	w-full bg-amber-950 absolute bottom-0 left-0 z-10"></div>
      <div className="flex  w-ful 	gap-5 ">
        {[5, 10, 20, 100].map((amount) => (
          <motion.div whileHover={{ y: -20 }}>
            <Button
              key={amount}
              onClick={() => handleAddCredit(amount)}
              className="flex flex-col items-center justify-center  bg-white  shadow-md text-sm font-bold  h-20"
            >
              <Image
                width={50}
                height={60}
                src={`/moneys/${amount}.jpeg`}
                alt={`${amount} Baht`}
              />
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Wallet;
