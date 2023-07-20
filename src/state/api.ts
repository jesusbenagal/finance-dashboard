import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  GetKpisResponse,
  GetProductsResponse,
  GetTransactionsResponse,
} from "./types";

import {
  kpiDataUrl,
  mainUrl,
  productsDataUrl,
  transactionsDataUrl,
} from "@/constants/data";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: mainUrl }),
  reducerPath: "main",
  tagTypes: ["Kpis", "Products", "Transactions"],
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => kpiDataUrl,
      providesTags: ["Kpis"],
    }),
    getProducts: build.query<Array<GetProductsResponse>, void>({
      query: () => productsDataUrl,
      providesTags: ["Products"],
    }),
    getTransactions: build.query<Array<GetTransactionsResponse>, void>({
      query: () => transactionsDataUrl,
      providesTags: ["Transactions"],
    }),
  }),
});

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } =
  api;
