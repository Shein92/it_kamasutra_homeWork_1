export type SetLoadingType = {
	type: "SET_LOADING",
	loading: boolean
}

export type ActionsType = SetLoadingType;

export type LoadingInitialStateType = {
	loading: boolean
}

let initialState: LoadingInitialStateType = {
	loading: false
};

export const loadingReducer = (state: LoadingInitialStateType = initialState, action: ActionsType) => {
	switch (action.type) {
		case "SET_LOADING": {
			return { ...state, loading: action.loading }
		}

		default: {
			return state;
		}
	}
}

export const setLoadingActionCreator = (loading: boolean): ActionsType => {
	return { type: 'SET_LOADING', loading }
}