import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IProduct } from '../../types/IProduct';

export const productsApi = createApi({
    reducerPath: 'products/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com/'
    }),
    endpoints: build => ({
        getProducts: build.query<IProduct[], void>({
            query: () => ({url: `products`}),
        }),
        getProductById: build.query<IProduct, string>({
            query: (id: string) => ({
                url: `products/${id}`
            })
        })
    })
})
export const {useGetProductsQuery} = productsApi;
export const {useGetProductByIdQuery} = productsApi;