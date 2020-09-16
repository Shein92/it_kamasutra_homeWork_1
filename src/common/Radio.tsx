import React, { ChangeEvent } from 'react';

type RaiodPropsType = {
	RadioSelect: Array<string>,
	value: string,
	name: string
	onChange: (value: string) => void
}

const Radio = React.memo((props: RaiodPropsType) => {

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		props.onChange(event.currentTarget.value)
	}

	return (
		<div>
			{props.RadioSelect.map((radio, index) => {
				return (
					<div key={index}>
						<label>
							<input type="radio"
								checked={props.value === radio}
								name={props.name}
								value={radio}
								onChange={onChange}
							/>
							{radio}
						</label>
					</div>
				)
			})}
		</div>
	)
});

export default Radio;