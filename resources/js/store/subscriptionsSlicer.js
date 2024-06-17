import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api';

export const fetchSubscriptions = createAsyncThunk(
  'subscriptions/fetchSubscriptions',
  async () => {
    try {
      const { data } = await api.get('/admin/subscriptions');
      return data;
    } catch ({ message }) {
      throw new Error(message);
    }
  }
);

const subscriptionsSlice = createSlice({
  name: 'subscriptions',
  initialState: {
    subscriptions: [],
    loading: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubscriptions.fulfilled, (state, action) => {
        state.subscriptions = action.payload.data;
      })
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.loading = 'loading';
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        (state) => {
          state.loading = 'idle';
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.loading = 'idle';
          if (action.payload) {
            state.error = action.payload.message;
          } else {
            state.error = action.error.message;
          }
        }
      );
  },
});

export default subscriptionsSlice.reducer;
