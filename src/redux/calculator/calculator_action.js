import { createAction } from '@reduxjs/toolkit';

export const calcSuccess = createAction('product/addProductSuccess');
export const calcError = createAction('product/addProductError');
export const calcRequest = createAction('product/addProductRequest');
