import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface GetAppConfigsResponse {
  id: number;
  logo: string;
  mainColor: string;
  hasUserSection: boolean;
}

export const innoloftApi = createApi({
  reducerPath: 'innoloftApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api-test.innoloft.com' }),
  endpoints: (builder) => ({
    getAppConfigs: builder.query<GetAppConfigsResponse, {}>({
      query: () => `/configuration/${process.env.REACT_APP_ID || 1}/`,
    }),
    getProduct: builder.query<any, {}>({
      query: () => `/product/6781/`,
    }),
    putProduct: builder.mutation<any, { name: string; description: string }>({
      query: ({ name, description }) => ({
        method: 'PUT',
        url: '/product/6781/',
        body: {
          name,
          description,
        },
      }),
    }),
  }),
});

export const {
  useGetAppConfigsQuery,
  useGetProductQuery,
  usePutProductMutation,
} = innoloftApi;
