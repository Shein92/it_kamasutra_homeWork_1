export type SortActionType = {
	type: 'SORT',
	payload: string
}
export type CheckAgeActionType = {
	type: 'CHECK',
	payload: number
}

export type ActionsType = SortActionType | CheckAgeActionType

export type StateOfUsersType = {
	id: string,
	name: string,
	age: number
}

export const hwReducer =
	(state: Array<StateOfUsersType>, action: ActionsType): Array<StateOfUsersType> => {
		switch (action.type) {
			case 'SORT': {
				let newState: Array<StateOfUsersType> = []
				if (action.payload === 'up') {
					newState = state.sort((a: StateOfUsersType, b: StateOfUsersType): number => {
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
				}
				if (action.payload === 'down') {
					newState = state.sort((a: StateOfUsersType, b: StateOfUsersType): number => {
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
				}
				return newState;
			}
			case 'CHECK': {
				let newState = state.filter(state => state.age >= action.payload);
				return newState;
			}
			default:
				return [...state];
		}
	};

export const SortHomewWorkAC = (text: string): SortActionType => {
	return { type: 'SORT', payload: text };
}

export const CheckAgeHomeWorkAC = (age: number):CheckAgeActionType => {
	return {type: 'CHECK', payload: age}
}