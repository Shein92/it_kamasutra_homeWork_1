import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Radio from '../common/Radio';
import { ChangeThemeAC, ThemeInitialStateType } from '../state/backgroundColorReducer';
import { AppRootStateType } from '../state/store';
import Request1 from './Request/Request';
import { RequestAPI } from './Request/RequestAPI';
import s from './StrongJunior.module.css'


const StrongJunior = React.memo(() => {
	let theme = useSelector<AppRootStateType, ThemeInitialStateType>(state => state.theme);
	let dispatch = useDispatch();

	const onThemeChange = (value: string) => {
		if (value === 'light' || value === 'dark') {
			dispatch(ChangeThemeAC(value))
		}
	}
	const ThemeSelect: Array<string> = ['light', 'dark'];

	let [checked, setChecked] = useState<boolean>(false);
	let [serverAnswer, setServerAnswer] = useState<string>('')

	const onClickChangeCheckboxStatus = useCallback(() => {
		RequestAPI.changeCheckbox(!checked)
			.then(res => {
				setChecked(res.data.yourBody.success);
				setServerAnswer(res.data.info);
			})
			.catch(error => {
				setServerAnswer(error.message);
			})
	},[checked])

	return (
		<div className={theme.theme === 'light' ? s.lightTheme : s.darkTheme}>
			<Radio
				onChange={onThemeChange}
				RadioSelect={ThemeSelect}
				name={'theme'}
				value={theme.theme}
			/>
			{'<<<<<---------REQUEST--------->>>>>'}
			<Request1 checked={checked}
				textOnBtn={'click here!'}
				onClick={onClickChangeCheckboxStatus}
				serverAnswer={serverAnswer}
			/>
		</div>
	)

})

export default StrongJunior;