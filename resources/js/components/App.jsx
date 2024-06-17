import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { MexicoMap } from './Home/MexicoMap';
import { SharedButton } from './Lawyer/SharedButton';
import { Index as SearchIndex } from './Search/Index';
import { Index as ProfileIndex } from './Profile/Index';
import { Index as CalendarIndex } from './Calendar/Index';
import { Index as AdminUserIndex } from './Admin/Users/Index';
import { Index as AdminSubscriptionsIndex } from './Admin/Subscriptions/Index';
import store from '../store/store';

if (document.querySelector('[react-map-mexico]')) {
  const element = document.querySelector('[react-map-mexico]');
  const props = { ...element.dataset };

  createRoot(element).render(<MexicoMap {...props} />);
}

if (document.querySelector('[react-shared-button]')) {
  const element = document.querySelector('[react-shared-button]');
  const props = { ...element.dataset };

  createRoot(element).render(<SharedButton {...props} />);
}

if (document.querySelector('[react-search]')) {
  const element = document.querySelector('[react-search]');
  const props = { ...element.dataset };

  createRoot(element).render(<SearchIndex {...props} />);
}

if (document.querySelector('[react-profile]')) {
  const element = document.querySelector('[react-profile]');
  const props = { ...element.dataset };

  createRoot(element).render(
    <Provider store={store}>
      <ProfileIndex {...props} />
      <ToastContainer />
    </Provider>
  );
}

if (document.querySelector('[react-calendar]')) {
  const element = document.querySelector('[react-calendar]');
  const props = { ...element.dataset };

  createRoot(element).render(<CalendarIndex {...props} />);
}

if (document.querySelector('[react-admin-users]')) {
  const element = document.querySelector('[react-admin-users]');
  const props = { ...element.dataset };

  createRoot(element).render(
    <Provider store={store}>
      <AdminUserIndex {...props} />
      <ToastContainer />
    </Provider>
  );
}

if (document.querySelector('[react-admin-subscriptions]')) {
  const element = document.querySelector('[react-admin-subscriptions]');
  const props = { ...element.dataset };

  createRoot(element).render(
    <Provider store={store}>
      <AdminSubscriptionsIndex {...props} />
      <ToastContainer />
    </Provider>
  );
}
