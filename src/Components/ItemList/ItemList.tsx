import React, {useState} from 'react';
import { ListType, PriorityType } from '../../App';
import item from "./ItemList.module.css";

type ItemListPropsType = {
    title: string,
    list: Array<ListType>,
    deleteItem: (itemID: number) => void,
    changeFilter: (newFilter: PriorityType) => void
}

function ItemList (props: ItemListPropsType) {
    return (
        <div className={item.wrapper}>
            <h3>{props.title}</h3>
            <ul className={item.ul}>
                {props.list.map(l => <li className={item.li} key={l.id}>
                    {l.n}
                    <button className={item.crossBtn} onClick={() => props.deleteItem(l.id)}>x</button>
                </li>)}
            </ul>
            <div>
                <button className={item.btn} onClick={() => props.changeFilter("all")}>All</button>
                <button className={item.btn} onClick={() => props.changeFilter("low")}>Low</button>
                <button className={item.btn} onClick={() => props.changeFilter("middle")}>Middle</button>
                <button className={item.btn} onClick={() => props.changeFilter("hight")}>Hight</button>
            </div>
        </div>
    )
}

export default ItemList;