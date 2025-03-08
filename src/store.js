import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import themeReducer from "./themeSlice";
import todoReducer from "./todoSlice";

const persistConfig = {
    key: "root",
    storage,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);
const persistedthemeReducer = persistReducer(persistConfig, themeReducer);
const persistedtodoReducer = persistReducer(persistConfig, todoReducer);

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    theme: persistedthemeReducer,
    todo: persistedtodoReducer
  },
});

export const persistor = persistStore(store);

export default store;