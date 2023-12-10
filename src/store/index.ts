import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./products/products.api";

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware)
})