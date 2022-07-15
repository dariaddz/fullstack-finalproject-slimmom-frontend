import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  calculatorRequest,
  calculatorError,
  calculatorSuccess,
} from './calculator_action';

const calculatorState = {
  kcal: null,
  calculatorNotRecommended: null,
};

const calculatorData = createReducer(calculatorState, {
  [calculatorSuccess]: (state, { payload }) => {
    return {
      ...state,
      calculators: [payload, ...state.calculators],
    };
  },
  [calculatorSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [calculatorRequest]: () => true,
  [calculatorSuccess]: () => false,
  [calculatorError]: () => false,
});

const error = createReducer(null, {
  [calculatorError]: (_, { payload }) => payload,
});

export default combineReducers({
  calculatorData,
  error,
  loading,
});
