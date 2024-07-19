import { configureStore } from '@reduxjs/toolkit';
import appointmentSlicer from './appointmentSlicer';
import profileSlicer from './profileSlicer';
import subscriptionsSlicer from './subscriptionsSlicer';
import usersSlicer from './usersSlicer';

export default configureStore({
  reducer: {
    appointments: appointmentSlicer,
    profile: profileSlicer,
    subscriptions: subscriptionsSlicer,
    users: usersSlicer,
  },
});
