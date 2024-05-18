import { createSlice } from '@reduxjs/toolkit';

const initStateFilters = {
  filters: {
    name: '',
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState: initStateFilters,
  extraReducers: () => {},
});

export const filtersReducer = filterSlice.reducer;
