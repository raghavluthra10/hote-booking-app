import { createSlice } from "@reduxjs/toolkit";

export const updateHotel = createSlice({
  name: "hotelList",
  initialState: {
    list: [
      { id: 1, name: "Raghav", bhk: 111, price: 111 },
      { id: 2, name: "Muskaan", bhk: 111, price: 111 },
      { id: 3, name: "Allu", bhk: 111, price: 111 },
      { id: 4, name: "bdjsc", bhk: 111, price: 111 },
    ],
  },
  reducers: {
    addHotel: (state, param) => {
      const { payload } = param;
      state.list = [...state.list, payload];
    },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = updateHotel.actions

export default updateHotel.reducer;
