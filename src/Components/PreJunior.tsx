import React, { useState, useCallback } from 'react';
// import logo from './logo.svg';
import '../App.css';
import { v1 } from 'uuid';
import Message from './Message/Message';
import ItemList from './ItemList/ItemList';
import InputAlert from './InputAlert/InputAlert';
import DemontrationFiles from './DemontrationFiles/DemontrationFiles';

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

const PreJunior = React.memo(() => {
    let [list, setList] = useState<Array<ListType>>([
		{ id: v1(), n: "работа", p: "hight" },
		{ id: v1(), n: "аниме", p: "low" },
		{ id: v1(), n: "игры", p: "middle" },
		{ id: v1(), n: "реакт", p: "hight" },
		{ id: v1(), n: "хтмл", p: "low" }
	])

	const deleteItem = useCallback((itemID: string) => {
		let newList = list.filter(l => l.id !== itemID);
		setList(newList);
	}, [list])

	let [priority, setPriority] = useState<PriorityType>("all");

	const changeFilter = useCallback((newFilter: PriorityType) => {
		setPriority(newFilter);
	},[])

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

	const addListItem = useCallback((value: string) => {
		let newItem = { id: v1(), n: value, p: "low" }
		let newItems = [newItem, ...list];
		setList(newItems);
	}, [list])

	let arrNames: Array<PersonArrayType> = [];

	let lengthOfNames: number = 0;

	const sayName = (newName: string) => {
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
	const counter = () => {
		lengthOfNames = arrNames.length;
		return lengthOfNames;
	}

	let [checked, setChecked] = useState<boolean>(false); 

	return (
		<div>
			<Message name="Vasyl" text="Thanks the guys from IT-Kamasutra for a such great work!" />
			<ItemList title={"Priority list"} list={PriorityStatus} deleteItem={deleteItem} changeFilter={changeFilter} addListItem={addListItem} />
			<InputAlert sayName={sayName} counter={counter} />
			<DemontrationFiles textOnTheBtn={"Click on it"} checked={checked} onChange={setChecked}/>
		</div>
	);
})

export default PreJunior;