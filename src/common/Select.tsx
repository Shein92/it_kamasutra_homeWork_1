import React, { ChangeEvent, useCallback } from 'react';

type SelectPropsType = {
	selectOption: Array<string>,
	onChange: (value: string) => void,
	value: string
}

const Select = React.memo((props: SelectPropsType) => {

	const onChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
		props.onChange(event.currentTarget.value)
	},[props])

	return (
		<select onChange={onChange} value={props.value}>
			{props.selectOption.map((op, index) => {
				return (
					<option key={index}>{op}</option>
				)
			})}
		</select>
	)
})

export default Select;