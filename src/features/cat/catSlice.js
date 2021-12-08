import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  enabled: true,
  autoRefresh: false,
  catImgUrl: '',
  status: 'loading',
};

const instance = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/',
  headers: {
    'API-KEY': 'ba9b7687-144f-4c2b-9f74-81096c93b28a',
  },
});

export function fetchCat() {
  return instance
    .get('/images/search')
    .then((response) => response.data);
}

export const getCatAsync = createAsyncThunk(
  'cat/fetchCat',
  async () => fetchCat(),
);

export const catSlice = createSlice({
  name: 'cat',
  initialState,
  reducers: {
    getCat: (state, { payload }) => {
      state.catImgUrl = payload[0].url;
    },
    enabledToggle: (state) => {
      state.enabled = !state.enabled;
    },
    autoRefreshToggle: (state) => {
      state.autoRefresh = !state.autoRefresh;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCatAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCatAsync.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.catImgUrl = payload[0].url;
      });
  },
});

export const { getCat, enabledToggle, autoRefreshToggle } = catSlice.actions;
export const selectCatUrl = (state) => state.cat.catImgUrl;
export const selectCatEnabled = (state) => state.cat.enabled;
export const selectCatAutoRefresh = (state) => state.cat.autoRefresh;
export const selectStatus = (state) => state.cat.status;

export default catSlice.reducer;
