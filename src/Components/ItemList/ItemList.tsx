import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import { ListType, PriorityType } from '../../App';
import item from "./ItemList.module.css";

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
            props.addListItem(newItem);
            setNewItem("") 
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

    return (
        <div className={item.wrapper}>
            <h3>{props.title}</h3>
            <div>
                <input
                    type="text"
                    value={newItem}
                    onChange={onChangeValue}
                    onKeyPress={(event: KeyboardEvent<HTMLInputElement>) => {
                        if(event.charCode === 13) {
                            addItem();
                        }
                    }}
                />
                <button onClick={addItem}>+</button>
            </div>
            <ul className={item.ul}>
                {props.list.map(l => {
                    function onBtnClick() {
                        props.deleteItem(l.id)
                    }
                    return (
                        <li className={item.li} key={l.id}>
                            {l.n}
                            <button className={item.crossBtn} onClick={onBtnClick}>x</button>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button className={item.btn} onClick={onAllBtnClick}>All</button>
                <button className={item.btn} onClick={onLowBtnClick}>Low</button>
                <button className={item.btn} onClick={onMiddleBtnClick}>Middle</button>
                <button className={item.btn} onClick={onHightBtnClick}>Hight</button>
            </div>
        </div>
    )
}

export default ItemList;