import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './userSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import calcData from './calculator/calculator_reducer';
import productReducer from './day/day_reducer';
import { authReducer } from './auth';

// імпортувати authReducer хто займається аутентифікацією та реєстрацією на фронтенді і розкоментувати все тут і в index.js

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isCalculated', 'isNewUser'],
  // додати до whitelist ще якусь property якщо її також потрібно зберігати в локал сторедж саме з auth
};

export const store = configureStore({
  reducer: {
    userData: userSlice.reducer,
    auth: persistReducer(authPersistConfig, authReducer),
    kcal: calcData,
    products: productReducer,
    // додати редьюсери кому які треба для роботи
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
export default store;
