import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import cartItems from "../../constants/cartItems";
import { cartItemsType } from "../../type/type";

type initialStateType = {
  cart: cartItemsType;
  totalAmount: number;
  totalPrice: number;
};

const initialState: initialStateType = {
  cart: cartItems,
  totalAmount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increase: (state, action: PayloadAction<string>) => {
      const albumId = action.payload;
      const album = state.cart.find((item) => item.id === albumId); //find는 원본 객체 반환, map은 새로운 배열 반환, forEach는 defined 반환(기존 배열 수정)
      if (album) album.amount++;
    },
    decrease: (state, action: PayloadAction<string>) => {
      const albumId = action.payload;
      const album = state.cart.find((item) => item.id === albumId);
      if (album) album.amount--;
    },
    remove: (state, action: PayloadAction<string>) => {
      const albumId = action.payload;
      state.cart = state.cart.filter((item) => item.id !== albumId);
    },
    clearCart: (state) => {
      state.cart = [];
      state.totalAmount = 0;
      state.totalPrice = 0;
    },
    calculateTotals: (state) => {
      const { totalAmount, totalPrice } = state.cart.reduce(
        (acc, item) => {
          acc.totalAmount += item.amount;
          acc.totalPrice += item.amount * Number(item.price);
          return acc; // 누적된 값 반환
        },
        { totalAmount: 0, totalPrice: 0 } // 초기값 설정
      );

      state.totalAmount = totalAmount;
      state.totalPrice = totalPrice;
    },
  },
});

export const cartSliceActions = cartSlice.actions;
export default cartSlice.reducer;
