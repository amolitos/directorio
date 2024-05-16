import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api';

export const fetchProfile = createAsyncThunk(
  'profile/fetchProfile',
  async () => {
    try {
      const { data } = await api.get('/profile');
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const createUpdateProfile = createAsyncThunk(
  'profile/createUpdateProfile',
  async (profile, { rejectWithValue }) => {
    try {
      const { data } = await api.post('/profile', profile);
      return data;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

export const metadataProfile = createAsyncThunk(
  'profile/metadataProfile',
  async (metadata, { rejectWithValue }) => {
    try {
      const { data } = await api.post('/profile/metadata', metadata);
      return data;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
      })
      .addCase(createUpdateProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
      })
      .addCase(metadataProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
      })
      .addMatcher(
        (action) =>
          action.type.startsWith('profile/') &&
          action.type.endsWith('/pending'),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith('profile/') &&
          action.type.endsWith('/fulfilled'),
        (state) => {
          state.loading = false;
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith('profile/') &&
          action.type.endsWith('/rejected'),
        (state, action) => {
          state.loading = false;
          if (action.payload) {
            state.error = action.payload.message;
          } else {
            state.error = action.error.message;
          }
        }
      );
  },
});

export default profileSlice.reducer;
