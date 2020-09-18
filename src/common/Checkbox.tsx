import React, { ChangeEvent } from 'react';

type CheckboxPropsType = {
	onChange?: (e: boolean) => void,
	checked: boolean
}

const Checkbox = React.memo((props: CheckboxPropsType) => {

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		if(props.onChange) {
			props.onChange(e.currentTarget.checked)
		}
	}

	return (
		// <input type="checkbox" />
		<input onChange={onChange} type="checkbox" checked={props.checked} />
	)
})

export default Checkbox;