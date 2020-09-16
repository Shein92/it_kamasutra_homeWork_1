import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import PreJunior from './Components/PreJunior';
import Header from './Components/Header/Header';
import Junior from './Components/Junior';
import StrongJunior from './Components/StrongJunior';
import { useSelector } from 'react-redux';
import { AppRootStateType } from './state/store';
import { darkTheme, lightTheme, ThemeInitialStateType } from './state/backgroundColorReducer';



function App() {
	let theme = useSelector<AppRootStateType, ThemeInitialStateType>(state => state.theme);
	return (
		<div style={theme.theme === 'light' ? lightTheme : darkTheme}>
			<HashRouter >
				<Header />
				<Route path="/prejunior" render={() => <PreJunior />} />
				<Route path="/junior" render={() => <Junior />} />
				<Route path="/strongjunior" render={() => <StrongJunior />} />
			</HashRouter>
		</div>
	)
}

export default App;
