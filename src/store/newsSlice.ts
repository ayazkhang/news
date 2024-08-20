import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NewsState {
  selectedCategory: string;
  selectedSource: string;
}

const initialState: NewsState = {
  selectedCategory: '',
  selectedSource: '',
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    setSource: (state, action: PayloadAction<string>) => {
      state.selectedSource = action.payload;
    },
  },
});

export const { setCategory, setSource } = newsSlice.actions;
export default newsSlice.reducer;
