import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface GetAppConfigsResponse {
  id: number;
  logo: string;
  mainColor: string;
  hasUserSection: boolean;
}

interface GetProductResponse {
  id: number;
  name: string;
  description: string;
  picture: string;
  type: {
    id: number;
    name: string;
  };
  categories: { id: number; name: string }[];
  implementationEffortText: any;
  investmentEffort: string;
  trl: {
    id: number;
    name: string;
  };
  video: string;
  user: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    sex: number;
    profilePicture: string;
    position: string;
  };
  company: {
    name: string;
    logo: string;
    address: {
      country: {
        name: string;
      };
      city: {
        name: string;
      };
      street: string;
      house: string;
      zipCode: string;
      longitude: string;
      latitude: string;
    };
  };
  businessModels: { id: number; name: string }[];
}

export const innoloftApi = createApi({
  reducerPath: 'innoloftApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api-test.innoloft.com' }),
  endpoints: (builder) => ({
    getAppConfigs: builder.query<GetAppConfigsResponse, {}>({
      query: () => `/configuration/${process.env.REACT_APP_ID || 1}/`,
    }),
    getProduct: builder.query<GetProductResponse, {}>({
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
