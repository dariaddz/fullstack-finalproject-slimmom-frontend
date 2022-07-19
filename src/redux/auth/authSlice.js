import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isNewUser: false,
  avatarUrl: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  isPending: false,
  isCalculated: false,
};

const resetToInitialState = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.isPending = false;
  state.isCalculated = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setNewUser: state => {
      state.isNewUser = true;
    },
    refreshToken: (state, { payload }) => {
      state.token = payload;
    },
    // refreshIsCalculated: (state, { payload }) => {
    //   state.isCalculated = payload;
    // }
  },

  extraReducers: {
    [authOperations.register.pending]: state => {
      state.isFetching = true;
      state.isPending = true;
    },
    [authOperations.register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      // state.name = action.payload.name;
      state.avatarURL = null;
      state.isFetching = false;
      state.isLoggedIn = true;
      state.isPending = false;
    },
    [authOperations.register.rejected]: state => {
      state.isFetching = false;
      state.isPending = false;
      state.isLoggedIn = false;
    },

    [authOperations.login.pending](state) {
      state.isPending = true;
    },
    [authOperations.login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isCalculated = action.payload.isCalculated;
      state.isLoggedIn = true;
      state.isPending = false;
    },
    [authOperations.login.rejected](state) {
      resetToInitialState(state);
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
      state.isPending = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isCalculated = action.payload.isCalculated;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
      state.isPending = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
      resetToInitialState(state);
    },
    [authOperations.logout.fulfilled](state) {
      resetToInitialState(state);
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
