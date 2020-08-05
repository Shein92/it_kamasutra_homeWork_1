import React, { ChangeEvent } from 'react';
import { RadioSelectType } from '../Components/Junior';

type RaiodPropsType = {
	RadioSelect: Array<RadioSelectType>,
	value: string,
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

function Radio(props: RaiodPropsType) {
	return (
		<form>
			{props.RadioSelect.map(radio => {
				return (
					<div>
						<input type="radio"
							checked={props.value === radio.value}
							key={radio.id}
							name={radio.name}
							value={radio.value}
							onChange={props.onChange}
						/>
						<label>{radio.value}</label>
					</div>
				)
			})}
		</form>
	)
};

export default Radio;