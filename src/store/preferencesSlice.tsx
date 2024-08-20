import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Preferences {
  category: string;
  country: string;
  sources: string[];
  authors: string[];
}

const initialState: Preferences = {
  category: "general",
  country: "us",
  sources: [],
  authors: [],
};

const preferencesSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    setPreferences: (state, action: PayloadAction<Preferences>) => {
      return action.payload;
    },
  },
});

export const { setPreferences } = preferencesSlice.actions;
export default preferencesSlice.reducer;
