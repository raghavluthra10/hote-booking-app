import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices/updateHotel";

// export default configureStore({
//   reducer: {
//     hotels: rootReducer,
//   },
// });

const store = configureStore({
  reducer: {
    hotels: rootReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
