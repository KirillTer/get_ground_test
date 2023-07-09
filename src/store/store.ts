import { combineReducers, configureStore } from "@reduxjs/toolkit"

import bookReducer from './reducers/BookSlice'

// import { listenerMiddleware } from './middleware/loginMiddleware'

const rootReducer = combineReducers({
  bookReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({serializableCheck: false})
  });
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']