import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";

// import { persistReducer, persistStore } from "redux-";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// const rootReducer = combineReducers({
//   user: userReducer,
// });

// const persistConfig = {
//   key: "root",
//   storage,
//   version: 1,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,

//   middleware: (getDefaultMiddleware) => {
//     return getDefaultMiddleware({ serializableCheck: false });
//   },
// });

// export const persistor = persistStore(store);
