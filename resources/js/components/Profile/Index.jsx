import React from 'react';
import { Wizard } from 'react-use-wizard';
import { Header } from './Wizard/Header';
import { General } from './General';
import { Specialties } from './Specialties';
import { Services } from './Services';
import { Personal } from './Personal';
import { Contact } from './Contact';

export function Index() {
  return (
    <Wizard header={<Header />}>
      <General />
      <Personal />
      <Specialties />
      <Services />
      <Contact />
    </Wizard>
  );
}
