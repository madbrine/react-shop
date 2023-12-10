import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: 'products/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com/'
    }),
    endpoints: build => ({
        getProducts: build.query<any, void>({
            query: () => ({url: `products`}),
        }),
        getProductById: build.query<any, string>({
            query: (id: string) => ({
                url: `products/${id}`
            })
        })
    })
})
export const {useGetProductsQuery} = productsApi;