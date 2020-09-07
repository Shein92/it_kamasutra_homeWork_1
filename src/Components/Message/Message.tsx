import React from 'react';
import mess from './Message.module.css';


type MessagePropsType = {
	name: string,
	text: string
}

const Message = React.memo((props: MessagePropsType) => {
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	return (
		<div className={mess.message}>
			<div className={mess.image}>
				<img src="https://scontent.fudj2-1.fna.fbcdn.net/v/t1.0-9/p960x960/76903549_3488170377922904_1712828928965476352_o.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=rfzITQWN4BsAX_Qxja2&_nc_ht=scontent.fudj2-1.fna&_nc_tp=6&oh=77cfa96bb06e31dba12e462119c78e4a&oe=5F404B86" alt="" />
			</div>
			<div className={mess.textBuble}>
				<div className={mess.userName}>
					{props.name}
                </div>
				<div className={mess.textArea}>
					{props.text}
				</div>
				<div className={mess.time}>
					{hours}:{minutes}
				</div>
			</div>
		</div>
	)
})

export default Message;