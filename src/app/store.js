import { configureStore } from "@redux/toolkit";

import { cryptoApi } from "../services/cryptoApi";
export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
});
