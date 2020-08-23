import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import item from "./ItemList.module.css";
import Button from '../../common/Button';
import Input from '../../common/Input';
import { ListType, PriorityType } from '../PreJunior';

type ItemListPropsType = {
	title: string,
	list: Array<ListType>,
	deleteItem: (itemID: string) => void,
	changeFilter: (newFilter: PriorityType) => void
	addListItem: (value: string) => void
}

function ItemList(props: ItemListPropsType) {

	let [newItem, setNewItem] = useState("");

	function addItem() {
		if (newItem === "") {
			return;
		} else {
			props.addListItem(newItem);
			setNewItem("")
		}
	}
	function onKeyPressed(event: KeyboardEvent<HTMLInputElement>) {
		if (event.charCode === 13) {
			addItem();
		}
	}

	function onChangeValue(event: ChangeEvent<HTMLInputElement>) {
		setNewItem(event.currentTarget.value)
	}

	function onAllBtnClick() {
		props.changeFilter('all')
	}
	function onLowBtnClick() {
		props.changeFilter('low')
	}
	function onMiddleBtnClick() {
		props.changeFilter('middle')
	}
	function onHightBtnClick() {
		props.changeFilter('hight')
	}

	let btnNewStyle = {
		height: '20px'
	}
	let inputNewStyle = {
		width: '150px',
		display: 'inline-block'
	};
	return (
		<div className={item.wrapper}>
			<h3>{props.title}</h3>
			<div>
				<Input style={inputNewStyle} value={newItem} onChange={onChangeValue} onKeyPress={onKeyPressed}
				/>
				{/* <button onClick={addItem}>+</button> */}
				<Button style={btnNewStyle} textOnBtn={"+"} onClick={addItem} />
			</div>
			<ul className={item.ul}>
				{props.list.map(l => {
					function onBtnClick() {
						props.deleteItem(l.id)
					}
					return (
						<li className={item.li} key={l.id}>
							{l.n}
							{/* <button className={item.crossBtn} onClick={onBtnClick}>x</button> */}
							<Button style={btnNewStyle} onClick={onBtnClick} textOnBtn={"x"} />
						</li>
					)
				})}
			</ul>
			<div>
				{/* <button className={item.btn} onClick={onAllBtnClick}>All</button>
                <button className={item.btn} onClick={onLowBtnClick}>Low</button>
                <button className={item.btn} onClick={onMiddleBtnClick}>Middle</button>
                <button className={item.btn} onClick={onHightBtnClick}>Hight</button> */}
				<Button textOnBtn={"All"} onClick={onAllBtnClick} />
				<Button textOnBtn={"Low"} onClick={onLowBtnClick} />
				<Button textOnBtn={"Middle"} onClick={onMiddleBtnClick} />
				<Button textOnBtn={"Hight"} onClick={onHightBtnClick} />
			</div>
		</div>
	)
}

export default ItemList;