import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../constants/cartItems";
const initialState = {
  cart: cartItems,
  totalAmount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increase: (state, action) => {
      const albumId = action.payload;
      const album = state.cart.find((item) => item.id === albumId); //find는 원본 객체 반환, map은 새로운 배열 반환, forEach는 defined 반환(기존 배열 수정)
      album.amount++;
    },
    decrease: (state, action) => {
      const albumId = action.payload;
      const album = state.cart.find((item) => item.id === albumId);
      album.amount--; //remove구현할 거면 album.amount=1이면 splice로 삭제 코드나 remove호출 코드 추가
    },
    remove: (state, action) => {
      const albumId = action.payload;
      state.cart = state.cart.filter((item) => item.id !== albumId);
    },
    clearCart: (state, action) => {
      state.cart = [];
      state.totalAmount = 0;
      state.totalPrice = 0;
    },
    calculateTotals: (state) => {
      const { totalAmount, totalPrice } = state.cart.reduce(
        (acc, item) => {
          acc.totalAmount += item.amount;
          acc.totalPrice += item.amount * item.price;
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
