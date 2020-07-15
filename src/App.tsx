import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Message from './Components/Message/Message';
import ItemList from './Components/ItemList/ItemList';
import { v1 } from 'uuid';
import InputAlert from './Components/InputAlert/InputAlert';
import DemontrationFiles from './Components/DemontrationFiles/DemontrationFiles';

export type ListType = {
	id: string,
	n: string,
	p: string
}

export type PriorityType = "all" | "low" | "middle" | "hight";

type PersonArrayType = {
	id: string,
	name: string
}

function App() {

	let [list, setList] = useState<Array<ListType>>([
		{ id: v1(), n: "работа", p: "hight" },
		{ id: v1(), n: "аниме", p: "low" },
		{ id: v1(), n: "игры", p: "middle" },
		{ id: v1(), n: "реакт", p: "hight" },
		{ id: v1(), n: "хтмл", p: "low" }
	])

	function deleteItem(itemID: string) {
		let newList = list.filter(l => l.id !== itemID);
		setList(newList);
	}

	let [priority, setPriority] = useState<PriorityType>("all");

	function changeFilter(newFilter: PriorityType) {
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

	function addListItem(value: string) {
		let newItem = { id: v1(), n: value, p: "low" }
		let newItems = [newItem, ...list];
		setList(newItems);
	}

	let arrNames: Array<PersonArrayType> = [];

	let lengthOfNames: number = 0;

	function sayName(newName: string) {
		let person = { id: v1(), name: newName };
		arrNames = [person, ...arrNames];
		lengthOfNames = arrNames.length;
		if (person.name !== "" && person.name !== null) {
			alert(`${person.name} has an ID ${person.id} of ${arrNames.length} people`)
			console.log(arrNames.map(name => name.name));
			console.log(lengthOfNames);
		} else {
			alert("Try once more again!")
			arrNames.pop();
		}
	}
	function counter() {
		lengthOfNames = arrNames.length;
		return lengthOfNames;
	}
	return (
		<div>
			<Message name="Vasyl" text="Thanks the guys from IT-Kamasutra for a such great work!" />
			<ItemList title={"Priority list"} list={PriorityStatus} deleteItem={deleteItem} changeFilter={changeFilter} addListItem={addListItem} />
			<InputAlert sayName={sayName} counter={counter} />
			<DemontrationFiles textOnTheBtn={"Click on it"}/>
		</div>
	);
}

export default App;
