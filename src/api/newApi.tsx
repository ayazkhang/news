import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "9d75a8c80d6a43fc87212c59cc267260";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://newsapi.org/v2",
  }),
  endpoints: (builder) => ({
    getTopHeadlines: builder.query({
      query: ({ category, country, search, date, source }) => {
        let queryString = `top-headlines?apiKey=${API_KEY}`;

        if (source) {
          // Use source only, no category or country
          queryString += `&sources=${source}`;
        } else {
          // Use category and country if no source is selected
          if (category) {
            queryString += `&category=${category}`;
          }
          if (country) {
            queryString += `&country=${country}`;
          }
        }

        if (search) {
          queryString += `&q=${search}`;
        }
        if (date) {
          queryString += `&from=${date}&to=${date}`;
        }

        return queryString;
      },
    }),

    getSources: builder.query({
      query: ({ category, country }) =>
        `top-headlines/sources?category=${category}&country=${country}&apiKey=${API_KEY}`,
    }),
  }),
});

export const { useGetTopHeadlinesQuery, useGetSourcesQuery } = newsApi;
