import { combineReducers, createStore } from "redux";
import { backgroundThemeReducer } from "./backgroundColorReducer";
import { loadingReducer } from "./loadingReducer";

const rootReducer = combineReducers({
	loading: loadingReducer,
	theme: backgroundThemeReducer
});

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;