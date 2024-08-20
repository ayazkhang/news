import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

interface Props {
  onSearch: (term: string) => void;
}

const ArticleSearch: React.FC<Props> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchClick = () => {
    onSearch(searchTerm); // Trigger the search action
  };

  return (
    <Box display="flex" gap={2} mb={4}>
      <TextField
        label="Search by keyword"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSearchClick}>
        Search
      </Button>
    </Box>
  );
};

export default ArticleSearch;
