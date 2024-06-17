import { configureStore } from '@reduxjs/toolkit';
import profileSlicer from './profileSlicer';
import subscriptionsSlicer from './subscriptionsSlicer';
import usersSlicer from './usersSlicer';

export default configureStore({
  reducer: {
    profile: profileSlicer,
    subscriptions: subscriptionsSlicer,
    users: usersSlicer,
  },
});
