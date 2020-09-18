import React from 'react';
import Button from '../../common/Button';
import Checkbox from '../../common/Checkbox';

type RequestPropsType = {
	checked: boolean,
	textOnBtn: string,
	onClick: () => void
	serverAnswer: string
}

const Request1 = React.memo((props: RequestPropsType) => {
	const onClick = () => {
		props.onClick();
	}
	return (
		<div>
			<Checkbox checked={props.checked}/>
			<Button textOnBtn={props.textOnBtn}
				onClick={onClick}/>
			<span>{props.serverAnswer}</span>
		</div>
	)
})

export default Request1;