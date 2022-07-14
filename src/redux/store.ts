/* eslint-disable import/no-anonymous-default-export */
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { persistReducer } from "redux-persist";
import persistStore from 'redux-persist/es/persistStore';
import storage from "redux-persist/lib/storage";
import { dataSlice } from './slices';


export const config = {
    key: 'root',
    storage: storage,
    version:1,
};

const persisted = persistReducer(config, dataSlice);

export const store = configureStore({
  reducer: {
  data: persisted,
  },})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  object,
  Action<string>
>

