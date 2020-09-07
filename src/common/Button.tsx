import React, { CSSProperties } from 'react';
import s from './Button.module.css'

export type ButtonPropsType = {
	textOnBtn: string
	onClick?: () => void
	style?: CSSProperties
	redBtn?: boolean
}


const Button = React.memo((props: ButtonPropsType) => {
	return (
		<button style={props.style} className={props.redBtn ? s.redBtn : s.btn} onClick={props.onClick}>{props.textOnBtn}</button>
	)
})

export default Button;