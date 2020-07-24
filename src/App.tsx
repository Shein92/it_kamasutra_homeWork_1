import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import PreJunior from './Components/PreJunior';
import Header from './Components/Header/Header';
import Junior from './Components/Junior';
import StrongJunior from './Components/StrongJunior';



function App() {
	return (
		<HashRouter>
			<Header />
			<Route path="/prejunior" render={() => <PreJunior/>}/>
			<Route path="/junior" render={() => <Junior/>}/>
			<Route path="/strongjunior" render={() => <StrongJunior/>}/>
		</HashRouter>
	)
}

export default App;
