import { combineReducers, createStore } from "redux";
import { loadingReducer } from "./loadingReducer";

const rootReducer = combineReducers({
    loading: loadingReducer
});

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;