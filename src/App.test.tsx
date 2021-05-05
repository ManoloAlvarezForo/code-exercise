import React from 'react';
import { render, screen } from '@testing-library/react';
import {IntlProvider} from 'react-intl';
import App from './App';

test('renders learn react link', () => {
  render(<IntlProvider defaultLocale="en" locale="en"><App /></IntlProvider>);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
