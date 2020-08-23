import React, { useState, ChangeEvent } from 'react';
import ChangeSpan from './ChangeSpan/ChangeSpan';
import Select from '../common/Select';
import Radio from '../common/Radio';
import ReducerList from './ReducerList/ReducerList';
import { StateOfUsersType, hwReducer, SortHomewWorkAC, CheckAgeHomeWorkAC } from '../state/homeWorkReducer';
import Timer from './Timer/Timer';
import moment from 'moment';

const styles: Object = {
	textAlign: 'center',
	marginTop: '50px'
}

type StateType = {
	x: string
	// y: number
}

export type SelectOtionType = {
	id: number,
	title: string
}

export type RadioSelectType = {
	id: number,
	name: string,
	value: string
}

export function saveState<T>(key: string, state: T) {
	const stateAsString = JSON.stringify(state);
	localStorage.setItem(key, stateAsString)
}

export function restoreState<T>(key: string, defaultState: T) {
	const stateAsString = localStorage.getItem(key);
	if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
	return defaultState;
}

function Junior() {

	let [value, setValue] = useState<string>('hi');

	let selectOption: Array<SelectOtionType> = [
		{ id: 1, title: 'books' },
		{ id: 2, title: 'films' },
		{ id: 3, title: 'traveling' },
		{ id: 4, title: 'sport' },
		{ id: 5, title: 'coding' },
	];

	let RadioSelect: Array<RadioSelectType> = [
		{ id: 1, name: "drink", value: "tea" },
		{ id: 2, name: "drink", value: "milk" },
		{ id: 3, name: "drink", value: "water" },
		{ id: 4, name: "drink", value: "beer" },
		{ id: 5, name: "drink", value: "home-made shnaps :D" },
	]

	let [optionValue, setOptionValue] = useState<string>('books');
	let [radioValue, setRadioValue] = useState<string>('tea')

	function changeValue(text: string) {
		setValue(text);
	}

	const state: StateType = restoreState<StateType>("test", { x: value });

	function onSaveClick() {
		saveState<StateType>("test", { x: value })
	}

	function onRestoreClick() {
		setValue(state.x)
	}

	function onSelectOptionChange(event: ChangeEvent<HTMLSelectElement>) {
		setOptionValue(event.currentTarget.value);
	}

	function onRadioSelectChange(event: ChangeEvent<HTMLInputElement>) {
		setRadioValue(event.currentTarget.value);
	}

	let initialUserList: Array<StateOfUsersType> = [
		{ id: '1', name: 'Laci', age: 28 },
		{ id: '2', name: 'Kari', age: 28 },
		{ id: '3', name: 'Gyuri', age: 26 },
		{ id: '4', name: 'Diana', age: 25 },
		{ id: '5', name: 'Richi', age: 7 },
		{ id: '6', name: 'Drake', age: 8 }
	]

	let [userList, setUserList] = useState<Array<StateOfUsersType>>(initialUserList);

	function onDownClick() {
		let filteredList: Array<StateOfUsersType> = hwReducer(initialUserList, SortHomewWorkAC('down'));
		setUserList([...filteredList]);
	}

	function onUpClick() {
		let filteredList: Array<StateOfUsersType> = hwReducer(initialUserList, SortHomewWorkAC('up'));
		setUserList([...filteredList]);
	}

	function onYearsClick() {
		let filteredList = hwReducer(initialUserList, CheckAgeHomeWorkAC(18));
		setUserList([...filteredList]);
	}

	function onAllClick() {
		setUserList([...initialUserList]);
	}    
	
	const [timerId, setTimerId] = useState<number>();
	const [time, setTime] = useState(moment().format('LTS'));
	const [date, setDate] = useState(moment().format('LL'));
	const [showDateBlock, setShowDateBlock] = useState<boolean>(false)

	let onStartClick = () => {
		clearInterval(timerId);
		const timer_id = window.setInterval(() => setTime(moment().format('LTS')), 1000);
		setDate(moment().format('LL'));
		setTimerId(timer_id);
	}

	let onStopClick = () => {
		clearInterval(timerId);
	}

	let onMouseEnter = () => {
		setShowDateBlock(true);
	}

	let onMouseLeave = () => {
		setShowDateBlock(false);
	}

	return (
		<div>
			<div style={styles}>
				<ChangeSpan message={value}
					onChange={changeValue}
					onSaveClick={onSaveClick}
					onRestoreClick={onRestoreClick}
				/>
			</div>
			<Select selectOption={selectOption}
				value={optionValue}
				onChange={onSelectOptionChange}
			/>
			<Radio RadioSelect={RadioSelect}
				value={radioValue}
				onChange={onRadioSelectChange}
			/>
			<ReducerList people={userList}
				onDownClick={onDownClick}
				onUpClick={onUpClick}
				onYearsClick={onYearsClick}
				onAllClick={onAllClick}
			/>
			<Timer time={time}
				date={date}
				showDateBlock={showDateBlock}
				onStartClick={onStartClick}
				onStopClick={onStopClick}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave} />
		</div>
	)
}

export default Junior;