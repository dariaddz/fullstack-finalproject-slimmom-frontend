import { createAction } from '@reduxjs/toolkit';

export const calcRequest = createAction('contact/AddContactRequest');
export const calcSuccess = createAction('contact/addContactSuccess');
export const calcError = createAction('contact/addContactError');
