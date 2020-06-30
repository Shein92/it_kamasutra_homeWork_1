import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Message from './Components/Message/Message';
import ItemList from './Components/ItemList/ItemList';

export type ListType = {
	id: number,
	n: string,
	p: string
}

export type PriorityType = "all" | "low" | "middle" | "hight";

function App() {

	let [list, setList] = useState<Array<ListType>> ([
		{id: 1, n: "работа", p: "hight"},
		{id: 2, n: "аниме", p: "low"},
		{id: 3, n: "игры", p: "middle"},
		{id: 4, n: "реакт", p: "hight"},
		{id: 5, n: "хтмл", p: "low"}
	])

	function deleteItem (itemID: number) {
		let newList = list.filter(l => l.id !== itemID);
		setList(newList);
	}

	let [priority, setPriority] = useState <PriorityType>("all");

	function changeFilter (newFilter: PriorityType) {
		setPriority(newFilter);
	}

	let PriorityStatus;
	if (priority === "low") {
		PriorityStatus = list.filter(l => l.p === "low");
	} else if (priority === "middle") {
		PriorityStatus = list.filter(l => l.p === "middle");
	} else if (priority === "hight") {
		PriorityStatus = list.filter(l => l.p === "hight");
	} else {
		PriorityStatus = list;
	}

	return (
		<div>
			<Message name="Vasyl" text="Thanks the guys from IT-Kamasutra for a such great work!"/>
			<ItemList title={"Priority list"} list={PriorityStatus} deleteItem={deleteItem} changeFilter={changeFilter}/>
		</div>
	);
}

export default App;
