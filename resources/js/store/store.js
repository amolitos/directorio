import { configureStore } from '@reduxjs/toolkit';
import profileSlicer from './profileSlicer';

export default configureStore({
  reducer: {
    profile: profileSlicer,
  },
});
