import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCardData = createAsyncThunk("fetchCardData", async (_, { dispatch }) => {
  const response = await fetch("http://localhost:3000/api/data", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json', 
    },
  });
  const data = await response.json();
  return data;
});

const cardDataSlice = createSlice({
  name: "cardData",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCardData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCardData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchCardData.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default cardDataSlice.reducer;