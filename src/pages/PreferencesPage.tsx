import React, { useState } from "react";
import PreferencesForm from "./PreferencesForm";
import { Container, Typography, Snackbar, Alert } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { setPreferences } from "../store/preferencesSlice";

const PreferencesPage: React.FC = () => {
  const preferences = useSelector((state: RootState) => state.preferences);
  const dispatch = useDispatch<AppDispatch>();

  const [open, setOpen] = useState(false);

  const handleSave = (newPreferences: Preferences) => {
    dispatch(setPreferences(newPreferences));
    setOpen(true); // Show success message
  };

  const handleCloseSnackbar = () => {
    setOpen(false); // Hide success message
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Customize Your Preferences
      </Typography>
      <PreferencesForm initialPreferences={preferences} onSave={handleSave} />

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Preferences saved successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default PreferencesPage;
