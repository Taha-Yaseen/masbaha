/* eslint-disable import/no-anonymous-default-export */
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { dataSlice } from './slices'

 export const store = configureStore({
reducer: {
 data: dataSlice,
},})





export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  object,
  Action<string>
>

