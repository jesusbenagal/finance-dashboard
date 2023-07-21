import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  GetKpisResponse,
  GetKpisResponseTransformed,
  GetProductsResponse,
  GetProductsResponseTransformed,
  GetTransactionsResponse,
} from "./types";

import { kpiDataTransformer, productDataTransformer } from "@/helpers";

import {
  kpiDataUrl,
  mainUrl,
  productsDataUrl,
  transactionsDataUrl,
  TagTypes,
} from "@/constants/data";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: mainUrl }),
  reducerPath: "main",
  tagTypes: [TagTypes.Kpis, TagTypes.Products, TagTypes.Transactions],
  endpoints: (build) => ({
    getKpis: build.query<GetKpisResponseTransformed, void>({
      query: () => kpiDataUrl,
      providesTags: [TagTypes.Kpis],
      transformResponse: (
        response: Array<GetKpisResponse>
      ): GetKpisResponseTransformed => kpiDataTransformer(response),
    }),
    getProducts: build.query<GetProductsResponseTransformed, void>({
      query: () => productsDataUrl,
      providesTags: [TagTypes.Products],
      transformResponse: (
        response: Array<GetProductsResponse>
      ): GetProductsResponseTransformed => productDataTransformer(response),
    }),
    getTransactions: build.query<Array<GetTransactionsResponse>, void>({
      query: () => transactionsDataUrl,
      providesTags: [TagTypes.Transactions],
    }),
  }),
});

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } =
  api;
