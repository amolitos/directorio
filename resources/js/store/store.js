import { configureStore } from '@reduxjs/toolkit';
import profileSlicer from './profileSlicer';
import usersSlicer from './usersSlicer';

export default configureStore({
  reducer: {
    profile: profileSlicer,
    users: usersSlicer,
  },
});
