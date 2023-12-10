import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IProduct } from '../../types/IProduct';
import { IServerResponce } from '../../types/IServerResponce';

export const productsApi = createApi({
    reducerPath: 'products/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com/'
    }),
    endpoints: build => ({
        getProducts: build.query<IServerResponce<IProduct[]>, void>({
            query: () => ({url: `products`}),
        }),
        getProductById: build.query<IServerResponce<IProduct>, string>({
            query: (id: string) => ({
                url: `products/${id}`
            })
        })
    })
})
export const {useGetProductsQuery} = productsApi;
export const {useGetProductByIdQuery} = productsApi;