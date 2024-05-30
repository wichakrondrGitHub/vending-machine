import { products } from "@/data/products";
import { Product } from "@/interface/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VendingMachineState {
  products: Product[];
  credit: number;
  selectedProductId?: string;
  selectedProduct?: Product;
  isSuccess?: boolean;
  invoiceProduct: Product[];
}

// Remove duplicate products from the initial state
const uniqueProducts = products.reduce((acc, product) => {
  if (!acc.find((p) => p.id === product.id)) {
    acc.push(product);
  }
  return acc;
}, [] as Product[]);

const initialState: VendingMachineState = {
  products: uniqueProducts,
  credit: 0,
  invoiceProduct: [],
};

const vendingMachineSlice = createSlice({
  name: "vendingMachine",
  initialState,
  reducers: {
    addCredit(state, action: PayloadAction<number>) {
      state.credit += action.payload;
    },
    selectProduct(state, action: PayloadAction<Product>) {
      const selectedProduct = action.payload;
      state.selectedProduct = selectedProduct;

      // Find the product in the invoice list
      const invoiceProductIndex = state.invoiceProduct.findIndex(
        (invoice) => invoice.id === selectedProduct.id
      );

      if (invoiceProductIndex >= 0) {
        // Update quantity if product is already in the invoice
        state.invoiceProduct[invoiceProductIndex].quantity += 1;
      } else {
        // Add new product to the invoice
        state.invoiceProduct.push({ ...selectedProduct, quantity: 1 });
      }

      // Update the quantity of the selected product in the products list
      const productIndex = state.products.findIndex(
        (product) => product.id === selectedProduct.id
      );
      if (productIndex >= 0 && state.products[productIndex].quantity > 0) {
        state.products[productIndex] = {
          ...state.products[productIndex],
          quantity: state.products[productIndex].quantity - 1,
        };
      }
    },
    deSelectProduct(state, action: PayloadAction<string>) {
      const productId = action.payload;

      // Find the product in the invoice list
      const invoiceProductIndex = state.invoiceProduct.findIndex(
        (invoice) => invoice.id === productId
      );

      if (invoiceProductIndex >= 0) {
        const invoiceProduct = state.invoiceProduct[invoiceProductIndex];

        // Decrease the quantity of the product in the invoice list
        if (invoiceProduct.quantity > 1) {
          invoiceProduct.quantity -= 1;
        } else {
          // Remove the product from the invoice list if quantity is 1
          state.invoiceProduct.splice(invoiceProductIndex, 1);
        }

        // Update the quantity of the deselected product in the products list
        const productIndex = state.products.findIndex(
          (product) => product.id === productId
        );
        if (productIndex >= 0) {
          state.products[productIndex].quantity += 1;
        }
      }
    },
    buyProduct(state) {
      const total = state.invoiceProduct.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
      state.credit = state.credit - total;
      state.invoiceProduct = [];
    },
  },
});

export const { addCredit, selectProduct, deSelectProduct, buyProduct } =
  vendingMachineSlice.actions;
export default vendingMachineSlice.reducer;
