import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface listState {
  id: number;
  name: string;
  bhk: number;
  price: number;
}

interface hotelState {
  list: listState[];
}

const initialState: hotelState = {
  list: [
    { id: 1, name: "Raghav", bhk: 111, price: 111 },
    { id: 2, name: "Muskaan", bhk: 111, price: 111 },
    { id: 3, name: "Allu", bhk: 111, price: 111 },
    { id: 4, name: "bdjsc", bhk: 111, price: 111 },
  ],
};

export const updateHotel = createSlice({
  name: "hotelList",
  initialState,
  reducers: {
    addHotel: (state, param: PayloadAction<listState>) => {
      const { payload } = param;
      state.list = [...state.list, payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addHotel } = updateHotel.actions;

export const selectCount = (state: RootState) => state.hotels.list;

export default updateHotel.reducer;
