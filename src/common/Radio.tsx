import React, { ChangeEvent } from 'react';
import { RadioSelectType } from '../Components/Junior';

type RaiodPropsType = {
	RadioSelect: Array<RadioSelectType>,
	value: string,
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Radio = React.memo((props: RaiodPropsType) => {
	return (
		<div>
			{props.RadioSelect.map(radio => {
				return (
					<div key={radio.id}>
						<label>
							<input type="radio"
								checked={props.value === radio.value}
								name={radio.name}
								value={radio.value}
								onChange={props.onChange}
							/>
							{radio.value}
						</label>
					</div>
				)
			})}
		</div>
	)
});

export default Radio;