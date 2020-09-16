import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Radio from '../common/Radio';
import { ChangeThemeAC, darkTheme, lightTheme, ThemeInitialStateType } from '../state/backgroundColorReducer';
import { AppRootStateType } from '../state/store';



const StrongJunior = React.memo(() => {
	let theme = useSelector<AppRootStateType, ThemeInitialStateType>(state => state.theme);
	let dispatch = useDispatch();

	const onThemeChange = (value: string) => {
		if(value === 'light' || value === 'dark') {
			dispatch(ChangeThemeAC(value))
		}
	}
	const ThemeSelect: Array<string> = ['light', 'dark']

	return (
		<div style={theme.theme === 'light' ? lightTheme : darkTheme}>
			<Radio 
				onChange={onThemeChange}
				RadioSelect={ThemeSelect}
				name={'theme'}
				value={theme.theme}
			/>
		</div>	
	)
	
})

export default StrongJunior;