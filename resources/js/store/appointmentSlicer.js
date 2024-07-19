import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api';

export const fetchAppointments = createAsyncThunk(
  'appointments/fetchAppointments',
  async () => {
    try {
      const { data } = await api.get('/appointments');
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const createAppointment = createAsyncThunk(
  'appointments/createAppointment',
  async (appointment, { rejectWithValue }) => {
    try {
      const { data } = await api.post('/appointments', appointment);
      return data;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

export const updateAppointment = createAsyncThunk(
  'appointments/updateAppointment',
  async (appointment, { rejectWithValue }) => {
    try {
      const { data } = await api.patch(
        `/appointments/${appointment.id}`,
        appointment
      );
      return data;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

export const deleteAppointment = createAsyncThunk(
  'appointments/deleteAppointment',
  async (appointmentId, { rejectWithValue }) => {
    try {
      await api.delete(`/appointments/${appointmentId}`);
      return appointmentId;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

export const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState: {
    appointments: [],
    appointment: {
      id: 'new',
      title: '',
      description: '',
      date: '',
      hour: '',
    },
    loading: false,
    error: null,
  },
  reducers: {
    setAppointment: (state, action) => {
      state.appointment = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppointments.fulfilled, (state, action) => {
        state.appointments = action.payload;
      })
      .addCase(createAppointment.fulfilled, (state, action) => {
        state.appointments = [...state.appointments, action.payload];
      })
      .addCase(updateAppointment.fulfilled, (state, action) => {
        const index = state.appointments.findIndex(
          (appointment) => appointment.id === action.payload.id
        );
        if (index !== -1) {
          state.appointments[index] = action.payload;
        }
      })
      .addCase(deleteAppointment.fulfilled, (state, action) => {
        state.appointments = state.appointments.filter(
          (appointment) =>
            parseInt(appointment.id, 10) !== parseInt(action.payload, 10)
        );
      })
      .addMatcher(
        (action) =>
          action.type.startsWith('appointments/') &&
          action.type.endsWith('/pending'),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith('appointments/') &&
          action.type.endsWith('/fulfilled'),
        (state) => {
          state.loading = false;
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith('appointments/') &&
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

export const { setAppointment } = appointmentsSlice.actions;

export default appointmentsSlice.reducer;
