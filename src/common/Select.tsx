import React, { ChangeEvent } from 'react';
import { SelectOtionType } from '../Components/Junior';

type SelectPropsType = {
	selectOption: Array<SelectOtionType>,
	onChange: (event: ChangeEvent<HTMLSelectElement>) => void,
	value: string
}

function Select(props: SelectPropsType) {
	return (
		<select onChange={props.onChange} value={props.value}>
			{props.selectOption.map(op => {
				return (
					<option key={op.id}>{op.title}</option>
				)
			})}
		</select>
	)
}

export default Select;