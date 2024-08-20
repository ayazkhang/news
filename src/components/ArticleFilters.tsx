import React, { useEffect, useState } from "react";
import {
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  TextField,
  Grid2,
  Grid,
} from "@mui/material";
import { useGetSourcesQuery } from "../api/newApi";

interface Props {
  onFilter: (filters: {
    category: string;
    country: string;
    date?: string;
    source?: string;
  }) => void;
}

const ArticleFilters: React.FC<Props> = ({ onFilter }) => {
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("us");
  const [date, setDate] = useState("");
  const [source, setSource] = useState("");

  // Fetch sources based on category and country
  const { data: sourcesData, refetch } = useGetSourcesQuery({
    category,
    country,
  });

  useEffect(() => {
    refetch(); // Refetch sources whenever category or country changes
  }, [category, country]);

  const handleFilter = () => {
    onFilter({ category, country, date, source });
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={1}
    >
      <Grid item xs={12} md={6} lg={2} mb={2}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            label="Category"
          >
            <MenuItem value="general">General</MenuItem>
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="technology">Technology</MenuItem>
            <MenuItem value="sports">Sports</MenuItem>
            {/* Add more categories */}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6} lg={2} mb={2}>
        <FormControl fullWidth>
          <InputLabel>Country</InputLabel>
          <Select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            label="Country"
          >
            <MenuItem value="us">United States</MenuItem>
            <MenuItem value="gb">United Kingdom</MenuItem>
            <MenuItem value="au">Australia</MenuItem>
            {/* Add more countries */}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6} lg={2} mb={2}>
        <FormControl fullWidth>
          <InputLabel>Source</InputLabel>
          <Select
            value={source}
            onChange={(e) => setSource(e.target.value)}
            label="Source"
          >
            <MenuItem value="">All Sources</MenuItem>
            {sourcesData?.sources?.map((source) => (
              <MenuItem key={source.id} value={source.id}>
                {source.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6} lg={2} mb={2}>
        <TextField
          label="Date"
          variant="outlined"
          fullWidth
          type="date"
          InputLabelProps={{ shrink: true }}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={2} mb={2}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          onClick={handleFilter}
        >
          Apply Filters
        </Button>
      </Grid>
    </Grid>
  );
};

export default ArticleFilters;
