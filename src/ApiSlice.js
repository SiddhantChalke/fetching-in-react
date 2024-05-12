import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }), // Adjust the base URL
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: (productId) => `products/${productId}`,
    }),
  }),
});

export const { useGetProductQuery } = ApiSlice;
