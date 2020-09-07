import React, { CSSProperties } from 'react';
import Button from '../../common/Button';


type ClockPropsType = {
	time: string
	date: string
	showDateBlock: boolean
	onStopClick: () => void
	onStartClick: () => void
	onMouseEnter: () => void
	onMouseLeave: () => void
}

const Timer = React.memo((props: ClockPropsType) => {
	let dateStyle = {
		width: '150px',
		height: '30px',
		border: '1px solid #4CAF50',
		borderRadius: '3px',
	}
	let timerStyle: CSSProperties  = {
		display: "inline-block",
		textAlign: 'center',
	}
	return (
		<div style={timerStyle}>
			<div onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
				{props.time}
				{props.showDateBlock ? <div style={dateStyle}>
					{props.date}
				</div> : ''}
			</div>
			<Button textOnBtn={"Start"} onClick={props.onStartClick} />
			<Button textOnBtn={"Stop"} onClick={props.onStopClick} />
		</div>
	)
})

export default Timer;