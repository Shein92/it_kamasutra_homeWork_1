import React, { ChangeEvent } from 'react';

type CheckboxPropsType = {
	onChange: (e: boolean) => void,
	checked: boolean
}

const Checkbox = React.memo((props: CheckboxPropsType) => {
	return (
		// <input type="checkbox" />
		<input onChange={(e: ChangeEvent<HTMLInputElement>) => props.onChange(e.currentTarget.checked)} type="checkbox" checked={props.checked} />
	)
})

export default Checkbox;