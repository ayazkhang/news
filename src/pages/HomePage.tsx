import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Grid, Typography } from "@mui/material";
import { RootState, AppDispatch } from "../store/store";
import { useGetTopHeadlinesQuery } from "../api/newApi";
import ArticleSearch from "../components/ArticleSearch";
import ArticleFilters from "../components/ArticleFilters";
import ArticleCard from "../components/ArticleCard";
import { setPreferences } from "../store/preferencesSlice";

const HomePage: React.FC = () => {
  const preferences = useSelector((state: RootState) => state.preferences);
  const dispatch = useDispatch<AppDispatch>();

  const { category, country, sources, authors } = preferences;

  const { data: articles, refetch } = useGetTopHeadlinesQuery({
    category,
    country,
    source: sources.length > 0 ? sources.join(",") : undefined,
    q: undefined, // Clear search term if needed
    date: undefined, // Clear date filter if needed
  });

  useEffect(() => {
    refetch();
  }, [preferences, refetch]);

  const handleSearch = (term: string) => {
    dispatch(setPreferences({ ...preferences, search: term }));
  };

  const handleFilterChange = (newFilters: {
    category: string;
    country: string;
    date?: string;
    source?: string;
  }) => {
    dispatch(setPreferences({ ...preferences, ...newFilters }));
  };

  return (
    <Container sx={{ mt: 4 }}>
      {/* Article Search */}
      <ArticleSearch onSearch={handleSearch} />

      {/* Article Filters */}
      <ArticleFilters onFilter={handleFilterChange} />

      {/* Display Articles */}
      <Grid container spacing={3}>
        {articles?.articles?.length ? (
          articles.articles.map((article) => (
            <Grid item xs={12} sm={6} md={4} key={article.url}>
              <ArticleCard article={article} />
            </Grid>
          ))
        ) : (
          <Typography
            variant="h6"
            component="p"
            align="center"
            sx={{ mt: 5, ml: 5 }}
          >
            No articles found.
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default HomePage;
