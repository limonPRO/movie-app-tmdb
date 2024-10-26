import { configureStore } from '@reduxjs/toolkit'
import commonReducer from "../fetures/commonSlice"
import userReducer from "../fetures/userSlice"

export const store = configureStore({
  reducer: {
    common: commonReducer,
    user:userReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch