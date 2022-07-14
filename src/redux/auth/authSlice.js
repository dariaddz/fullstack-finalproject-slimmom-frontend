import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isNewUser: false,
  avatarUrl: null,
  isOnTraining: false,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  isPending: false,
};

const resetToInitialState = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.isPending = false;
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
    setTrainingStatus: (state, { payload }) => {
      state.isOnTraining = payload;
    },
  },

  extraReducers: {
    [authOperations.register.pending]: state => {
      state.isFetching = true;
    },
    [authOperations.register.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.name = payload.name;
      state.avatarURL = null;
      state.isFetching = false;
      state.isLoggedIn = true;
    },
    [authOperations.register.rejected]: state => {
      state.isFetching = false;
    },

    [authOperations.login.pending](state) {
      state.isPending = true;
    },
    [authOperations.login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
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
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
      state.isPending = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
      resetToInitialState(state);
    },

    [authOperations.refresh.pending]: state => {
      state.isPending = true;
    },
    [authOperations.refresh.fulfilled]: (state, { payload }) => {
      state.name = payload.name;
      state.avatarURL = payload.avatarURL;
      state.isOnTraining = payload.isOnTraining;
      state.isPending = false;
    },
    [authOperations.refresh.rejected]: state => {
      state.isPending = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
