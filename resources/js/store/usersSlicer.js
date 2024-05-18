import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const { data } = await api.get('/admin/users');
    return data;
  } catch ({ message }) {
    throw new Error(message);
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload.data;
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

export default usersSlice.reducer;
