import { combineReducers, createStore } from 'redux';
import React from 'react'
import { loadingReducer } from '../../state/loadingReducer';
import { backgroundThemeReducer } from '../../state/backgroundColorReducer';
import { Provider } from 'react-redux';
import { store } from '../../state/store';

const rootReducer = combineReducers({
	loading: loadingReducer,
	theme: backgroundThemeReducer
});

let initState = {
	loading: false,
	theme: 'light'
}

type Type = ReturnType<typeof rootReducer>

export const StoryBookStore = createStore(rootReducer, initState as any)


export const ReduxStoreProviderDecorator = (storyFn: any) => {
	return (
		<Provider store={StoryBookStore}>
			{storyFn()}
		</Provider>
	)
}