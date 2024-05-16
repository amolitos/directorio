import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { MexicoMap } from './Home/MexicoMap';
import { Index as SearchIndex } from './Search/Index';
import { Index as ProfileIndex } from './Profile/Index';
import { Index as AgendaIndex } from './Agenda/Index';
import store from '../store/store';

if (document.querySelector('[react-map-mexico]')) {
  const element = document.querySelector('[react-map-mexico]');
  const props = { ...element.dataset };

  createRoot(element).render(<MexicoMap {...props} />);
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

if (document.querySelector('[react-abogado-agenda]')) {
  const element = document.querySelector('[react-abogado-agenda]');
  const props = { ...element.dataset };

  createRoot(element).render(<AgendaIndex {...props} />);
}
