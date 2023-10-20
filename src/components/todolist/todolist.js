import React from 'react';
import { useState } from 'react';
import './todolist.css';

export function ToDoList() {
	const [list, setList] = useState([]);
	const [text, setText] = useState("");

	function handleChange(e) {
		setText(e.target.value)
	}

	function handleClick() {
		let listCopy = [...list];
		listCopy.push(text);
		setList([...listCopy]);
		setText("")
	}

	function handleRemoveClick(str) {
		let listCopy = [...list];
		listCopy.splice(listCopy.indexOf(str), 1);
		setList([...listCopy]);
	}

	return (
		<div className="wrapper container">
			<div className=" inputBox">
				<div className="">
					<input className="form-control me-2" value={text} onChange={handleChange} />
				</div>
				<button className="btn btn-primary" onClick={handleClick}>Add</button>

			</div>
			<ul>
				{list.map((item) => (

					<li className="listItem">
						<button
							className=" btn btn-sm btn-primary"
							onClick={() => handleRemoveClick(item)}
						>x</button>
						<div className="">
							<EditInput item={item} list={list} setList={setList} />
						</div>
						<div className="">
							{item}
						</div>
					</li>
				))}

			</ul>
		</div >
	)
}


export function EditInput(props) {
	const [toggle, setToggle] = useState(false);
	const [text, setText] = useState("");
	const {item, list, setList} = props

	function handleClick() {
		let listCopy = [...list];
		const itemloc = listCopy.indexOf(item)
		listCopy[itemloc] = text;
		setList([...listCopy]);
		setText("")

	}

	function handleChange(e) {
		setText(e.target.value)
	}

	return (
		<div className="container">
			{toggle && (
				<div className="">
					<input className="col" value={text} onChange={handleChange} />
					<button className="btn btn-sm btn-primary" onClick={() => { handleClick(text); setToggle(false) }}>e</button>
				</div>
			)}
			{!toggle && (
				<div className="">
					<button className="btn btn-sm btn-primary" onClick={() => setToggle(!toggle)}>e</button>
				</div>
			)}
		</div>

	)
}
