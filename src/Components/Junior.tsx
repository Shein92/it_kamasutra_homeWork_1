import React, { useState, useCallback } from 'react';
import ChangeSpan from './ChangeSpan/ChangeSpan';
import Select from '../common/Select';
import Radio from '../common/Radio';
import ReducerList from './ReducerList/ReducerList';
import { StateOfUsersType, hwReducer, SortHomewWorkAC, CheckAgeHomeWorkAC } from '../state/homeWorkReducer';
import Timer from './Timer/Timer';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { AppRootStateType } from '../state/store';
import { LoadingInitialStateType, setLoadingActionCreator } from '../state/loadingReducer';
import Button from '../common/Button';
import Preloader from '../common/Preloader/Preloader';
import Range from '../common/Range/Range'

const styles: Object = {
	textAlign: 'center',
	marginTop: '50px'
}

type StateType = {
	x: string
	// y: number
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

const Junior = React.memo(() => {

	let [value, setValue] = useState<string>('hi');

	let selectOption: Array<string> = ['books', 'films', 'traveling', 'sport', 'coding'];

	let RadioSelect: Array<string> = ["tea", "milk", "water", "beer", "home-made shnaps :D"]

	let [optionValue, setOptionValue] = useState<string>('books');
	let [radioValue, setRadioValue] = useState<string>('tea')

	const changeValue = useCallback((text: string) => {
		setValue(text);
	},[])

	const state: StateType = restoreState<StateType>("test", { x: value });

	const onSaveClick = useCallback(() => {
		saveState<StateType>("test", { x: value })
	},[value])

	const onRestoreClick = useCallback(() => {
		setValue(state.x)
	},[state.x])

	const onSelectOptionChange = useCallback((value: string) => {
		setOptionValue(value);
	}, [])

	const onRadioSelectChange = useCallback((value: string) => {
		setRadioValue(value);
	},[])

	let initialUserList: Array<StateOfUsersType> = [
		{ id: '1', name: 'Laci', age: 28 },
		{ id: '2', name: 'Kari', age: 28 },
		{ id: '3', name: 'Gyuri', age: 26 },
		{ id: '4', name: 'Diana', age: 25 },
		{ id: '5', name: 'Richi', age: 7 },
		{ id: '6', name: 'Drake', age: 8 }
	]

	let [userList, setUserList] = useState<Array<StateOfUsersType>>(initialUserList);

	const onDownClick = useCallback(() => {
		let filteredList: Array<StateOfUsersType> = hwReducer(initialUserList, SortHomewWorkAC('down'));
		setUserList([...filteredList]);
	},[initialUserList])

	const onUpClick = useCallback(() => {
		let filteredList: Array<StateOfUsersType> = hwReducer(initialUserList, SortHomewWorkAC('up'));
		setUserList([...filteredList]);
	}, [initialUserList])

	const onYearsClick = useCallback(() => {
		let filteredList = hwReducer(initialUserList, CheckAgeHomeWorkAC(18));
		setUserList([...filteredList]);
	}, [initialUserList])

	const onAllClick = useCallback(() => {
		setUserList([...initialUserList]);
	}, [initialUserList])

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

	let onStopClick = useCallback(() => {
		clearInterval(timerId);
	}, [timerId])

	let onMouseEnter = useCallback(() => {
		setShowDateBlock(true);
	}, [])

	let onMouseLeave = useCallback(() => {
		setShowDateBlock(false);
	},[])

	let loading = useSelector<AppRootStateType, LoadingInitialStateType>(state => state.loading);
	let dispatch = useDispatch();

	let onPreloaderButtonClick = useCallback(() => {
		dispatch(setLoadingActionCreator(true));
		setTimeout(() => dispatch(setLoadingActionCreator(false)), 3000);
	},[dispatch])

	let minValue: number = 0;
	let maxValue: number = 100;
	let [rangeValue, setRangeValue] = useState<number>(0);

	const rangeValueChange = useCallback((num: number) => {
		setRangeValue(num);
	}, []);

	return (
		<div>
			{loading.loading ? <Preloader /> : <div>
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
					name={'drink'}
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
					onMouseLeave={onMouseLeave}
				/>
				<div>
					<div>
						<span>PRELOADER EXAMPLE</span>	
					</div>
					<Button textOnBtn={"Preloader"}
						onClick={onPreloaderButtonClick}
					/>
				</div>
				<div>
					<span>Range example</span>
					<Range maxValue={maxValue}
						minVaue={minValue}
						value={rangeValue}
						onChange={rangeValueChange}
					/>
				</div>
			</div>}
		</div>
	)
})

export default Junior;