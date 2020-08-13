import { hwReducer, StateType, SortHomewWorkAC, CheckAgeHomeWorkAC } from "./homeWorkReducer";

test('sorting array by names with UP payload', () => {
	let initialState: Array<StateType> = [
		{ id: '1', name: 'Laci', age: 28 },
		{ id: '2', name: 'Kari', age: 28 },
		{ id: '3', name: 'Gyuri', age: 26 },
		{ id: '4', name: 'Diana', age: 25 },
		{ id: '5', name: 'Richi', age: 7 },
		{ id: '6', name: 'Drake', age: 8 },
	];

	let sorted = initialState.sort((a: StateType, b: StateType): number => {
		let nameA = a.name.toLocaleLowerCase(),
			nameB = b.name.toLocaleLowerCase();
		if (nameA < nameB) {
			return -1
		}
		if (nameA > nameB) {
			return 1
		}
		return 0;
	})

	let endState: Array<StateType> = hwReducer(initialState, SortHomewWorkAC('up'));

	expect(endState).toBe(sorted);
	expect(endState.length).toBe(6);
	expect(endState[0].name).toBe('Diana');
});

test('sorting array by names with Down payload', () => {
	let initialState: Array<StateType> = [
		{ id: '1', name: 'Laci', age: 28 },
		{ id: '2', name: 'Kari', age: 28 },
		{ id: '3', name: 'Gyuri', age: 26 },
		{ id: '4', name: 'Diana', age: 25 },
		{ id: '5', name: 'Richi', age: 7 },
		{ id: '6', name: 'Drake', age: 8 },
	];

	let sorted: Array<StateType> = initialState.sort((a: StateType, b: StateType): number => {
		let nameA = a.name.toLocaleLowerCase(),
			nameB = b.name.toLocaleLowerCase();
		if (nameB < nameA) {
			return -1
		}
		if (nameB > nameA) {
			return 1
		}
		return 0;
	})

	let endState: Array<StateType> = hwReducer(initialState, SortHomewWorkAC('down'));

	expect(endState).toBe(sorted);
	expect(endState.length).toBe(6);
	expect(endState[0].name).toBe('Richi');
})

test('check, if there are people, whos age is 18 or more', () => {
	let initialState: Array<StateType> = [
		{ id: '1', name: 'Richi', age: 7 },
		{ id: '2', name: 'Laci', age: 28 },
		{ id: '3', name: 'Kari', age: 28 },
		{ id: '4', name: 'Gyuri', age: 26 },
		{ id: '5', name: 'Drake', age: 8 },
		{ id: '6', name: 'Diana', age: 25 }
	];

	let sorted: Array<StateType> = initialState.filter(state => state.age >= 18);

	let endState: Array<StateType> = hwReducer(initialState, CheckAgeHomeWorkAC(18));

	expect(endState).toEqual(sorted);
	expect(endState.length).toBe(4);
	expect(endState[0].name).toBe('Laci');
})