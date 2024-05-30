# Vending Machine App

This project is an online vending machine simulation built using Next.js 14, NextUI v2, Tailwind CSS, Tailwind Variants, TypeScript, Framer Motion, and next-themes.

Installation and Usage
Prerequisites
Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/vending-machine.git
   ```

2. Navigate into the project directory:
   ```bash
   cd vending-machine
   ```
3. Install dependencies:
   ```bash
   You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `yarn`:
   ```
4. Run the development server:
   ````bash
   yarn dev
      ```
   This will start the development server and the app will be accessible at http://localhost:3000.
   ````

## How to Use

#### This is example data for display Vending products

You can update Product in folder /data/product.ts.

```bash
export const products: Product[] = [
 {
   id: "A2",
   name: "Chips",
   price: 20,
   quantity: 5,
   imageUrl: "/products/lays.jpeg",
 },
 {
   id: "A3",
   name: "Pepsi",
   price: 15,
   quantity: 10,
   imageUrl: "/products/pepsi.jpeg",
 },
 {
   id: "A4",
   name: "Cofee",
   price: 15,
   quantity: 15,
   imageUrl: "/products/coffee.jpeg",
 },
 {
   id: "A5",
   name: "Beef",
   price: 1200,
   quantity: 15,
   imageUrl: "/products/wagyu.jpeg",
 },
];
```
