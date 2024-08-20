import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import { useGetSourcesQuery } from "../api/newApi";

interface Preferences {
  category: string;
  country: string;
  sources: string[];
  authors: string[];
}

interface PreferencesFormProps {
  initialPreferences: Preferences;
  onSave: (prefs: Preferences) => void;
}

const PreferencesForm: React.FC<PreferencesFormProps> = ({
  initialPreferences,
  onSave,
}) => {
  const [preferences, setPreferences] =
    React.useState<Preferences>(initialPreferences);

  const { data: sourcesData } = useGetSourcesQuery({
    category: preferences.category,
    country: preferences.country,
  });

  const handleSave = () => {
    onSave(preferences);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6">Customize Your News Feed</Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={preferences.category}
              onChange={(e) =>
                setPreferences((prev) => ({
                  ...prev,
                  category: e.target.value,
                }))
              }
              label="Category"
            >
              <MenuItem value="general">General</MenuItem>
              <MenuItem value="business">Business</MenuItem>
              <MenuItem value="technology">Technology</MenuItem>
              <MenuItem value="sports">Sports</MenuItem>
              {/* Add more categories if needed */}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel>Sources</InputLabel>
            <Select
              multiple
              value={preferences.sources}
              onChange={(e) =>
                setPreferences((prev) => ({
                  ...prev,
                  sources: e.target.value as string[],
                }))
              }
              renderValue={(selected) => selected.join(", ")}
              label="Sources"
            >
              {sourcesData?.sources.map((source) => (
                <MenuItem key={source.id} value={source.id}>
                  {source.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel>Authors</InputLabel>
            <Select
              multiple
              value={preferences.authors}
              onChange={(e) =>
                setPreferences((prev) => ({
                  ...prev,
                  authors: e.target.value as string[],
                }))
              }
              renderValue={(selected) => selected.join(", ")}
              label="Authors"
            >
              {/* Example authors, replace with actual data or dynamic options */}
              <MenuItem value="author1">Author 1</MenuItem>
              <MenuItem value="author2">Author 2</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save Preferences
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PreferencesForm;
