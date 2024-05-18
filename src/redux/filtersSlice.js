import { createSlice } from '@reduxjs/toolkit';

const initStateFilters = {
  filters: {
    name: '',
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState: initStateFilters,
  reducers: {
    changeNameFilter(state, action) {
      state.name = action.payload;
    },
  },
});

// selectors
export const selectNameFilter = state => state.filters.name;
// export const selectFilter = state => state.filters;

export const { changeNameFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
