import React from "react";
import Wallet from "@/components/Wallet";
import VendingMachine from "@/components/VendingMachine";
import Invoice from "@/components/Invoice";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vending Mechine",
  description:
    "This project is an online vending machine simulation built using Next.js 14, NextUI v2, Tailwind CSS, Tailwind Variants, TypeScript, Framer Motion, and next-themes",
};

const HomePage: React.FC = () => {
  return (
    // <div className=" flex items-center justify-center bg-white dark:bg-black p-4 md:flex-row flex-col">
    <div className=" flex items-center justify-center  p-4 md:flex-row flex-col  gap-9">
      <VendingMachine />
      <div className="flex-1">
        <Wallet />
        <Invoice />
      </div>
    </div>
  );
};

export default HomePage;
