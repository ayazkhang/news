import React from "react";
import { Box, Typography } from "@mui/material";

const NotFoundPage: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Typography variant="h4" color="textPrimary">
        404 - Page Not Found
      </Typography>
    </Box>
  );
};

export default NotFoundPage;
