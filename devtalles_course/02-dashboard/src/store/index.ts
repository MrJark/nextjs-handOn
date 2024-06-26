import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter/counterSlice";
import pokemonReducer from "./pokemon/pokemonSlice";
import { useDispatch, useSelector } from "react-redux";
import { localStorageMiddleware } from "./middleware/localStorageMiddleware";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    competitivePokemon: pokemonReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(localStorageMiddleware),
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(localStorageMiddleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); // sustituye al useDispatch: se comunica con el store y hace el dispatch de acciones en el store
export const useAppSelector = useSelector.withTypes<RootState>(); // sustituye al useSelector: sirve para escuchar ciertas partes del state y que cuando cambie, se redibujen
