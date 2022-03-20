import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices/updateHotel";

export default configureStore({
  reducer: {
    hotels: rootReducer,
  },
});

// export type RootState = ReturnType<typeof rootReducer>;
