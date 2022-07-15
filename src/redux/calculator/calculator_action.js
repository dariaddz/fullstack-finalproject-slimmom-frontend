import { createAction } from '@reduxjs/toolkit';
export const calculatorRequest = createAction('calculator/calculatorRequest');
export const calculatorSuccess = createAction('calculator/calculatorSuccess');
export const calculatorError = createAction('calculator/calculatorError');
