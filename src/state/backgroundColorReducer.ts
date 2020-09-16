import { CSSProperties } from "react"

export type ThemeInitialStateType = {
	theme: Theme
}

export const lightTheme: CSSProperties = {
	backgroundColor: '#E2E2E2',
	color: '#363537',
	border: '#FFF',
}

export const darkTheme: CSSProperties = {
	backgroundColor: '#363537',
	color: '#FAFAFA',
	border: '#6B8096',
}


export const initialState: ThemeInitialStateType = {
	theme: 'light'
}

export type ChangeThemeActionType = {
	type: 'CHANGE-THEME',
	theme: Theme
}

export type Theme = 'light' | 'dark'

export const backgroundThemeReducer = (state = initialState, action: ChangeThemeActionType): ThemeInitialStateType => {
	switch (action.type) {
		case 'CHANGE-THEME': {
			return { ...state, theme: action.theme }
		}
		default: {
			return state;
		}
	}
}

export const ChangeThemeAC = (theme: Theme): ChangeThemeActionType => {
	return { type: 'CHANGE-THEME', theme }
}