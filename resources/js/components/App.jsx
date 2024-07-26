import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { MexicoMap } from './Home/MexicoMap';
import { SharedButton } from './Lawyer/SharedButton';
import { CashPayments } from './Plans/CashPayments';
import { Player } from './UI/Player';
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

if (document.querySelector('[react-search]')) {
  const element = document.querySelector('[react-search]');
  const props = { ...element.dataset };
  const queryClient = new QueryClient();

  createRoot(element).render(
    <QueryClientProvider client={queryClient}>
      <SearchIndex {...props} />
    </QueryClientProvider>
  );
}

if (document.querySelector('[react-profile]')) {
  const element = document.querySelector('[react-profile]');
  const props = { ...element.dataset };

  createRoot(element).render(
    <Provider store={store}>
      <ProfileIndex {...props} />
      <ToastContainer position="bottom-center" theme="dark" />
    </Provider>
  );
}

if (document.querySelector('[react-shared-button]')) {
  const element = document.querySelector('[react-shared-button]');
  const props = { ...element.dataset };

  createRoot(element).render(<SharedButton {...props} />);
}

if (document.querySelector('[react-cash-payments]')) {
  const element = document.querySelector('[react-cash-payments]');
  const props = { ...element.dataset };
  const stripeKey = loadStripe(import.meta.env.VITE_STRIPE_KEY);

  createRoot(element).render(
    <Elements stripe={stripeKey}>
      <CashPayments {...props} />
    </Elements>
  );
}

if (document.querySelector('[react-calendar]')) {
  const element = document.querySelector('[react-calendar]');
  const props = { ...element.dataset };

  createRoot(element).render(
    <Provider store={store}>
      <CalendarIndex {...props} />
    </Provider>
  );
}

if (document.querySelector('[react-player]')) {
  const element = document.querySelector('[react-player]');
  const props = { ...element.dataset };

  createRoot(element).render(<Player {...props} />);
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
