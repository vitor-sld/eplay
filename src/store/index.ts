import { configureStore } from '@reduxjs/toolkit'
import cart from './reducers/cart'

import api from '../services/api'

export const store = configureStore({
  reducer: {
    cart,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})
export type RootReducer = ReturnType<typeof store.getState>
