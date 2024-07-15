import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchingFood",
  initialState: {
    query : "",
    isSearch : false,
    isFetched : false,
    result : []
  },
  reducers: {
    updateFetched: (state, action) => {
      state.isFetched = action.payload;
    },
    updateIsSearch: (state, action) => {
      state.isSearch = action.payload;
    },
    updateQuery: (state, action) => {
      state.query = action.payload;
    },
    updateResult: (state, action) => {
      state.result = action.payload;
    }
  },
});

export const { updateFetched, updateIsSearch, updateQuery, updateResult} = searchSlice.actions;
export default searchSlice.reducer;
