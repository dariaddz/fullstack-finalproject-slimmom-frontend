import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  user: { name: null, email: null },
  isNewUser: false,
  avatarURL: null,
  isOnTraining: false,
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const resetToInitialState = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
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

    [authOperations.login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.login.rejected](state) {
      resetToInitialState(state);
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
      resetToInitialState(state);
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
