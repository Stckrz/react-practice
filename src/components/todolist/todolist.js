import React from 'react';
import { useState } from 'react';
import './todolist.css';

export function ToDoList() {
	const [list, setList] = useState([
		"balls",
		"bepis"
	])
	const [text, setText] = useState("")
	let listCopy = [...list];

	function handleChange(e) {
		setText(e.target.value)
	}

	function handleClick() {
		listCopy.push(text);
		setList([...listCopy]);
		setText("")
	}

	function handleRemoveClick(str) {
		listCopy.splice(listCopy.indexOf(str), 1);
		setList([...listCopy]);
	}

	return (
		<div className = "wrapper container">
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
							className="delbutt btn btn-sm btn-primary"
							onClick={() => handleRemoveClick(item)}
						>x</button>
						<div className="">
						{item}
						</div>
						<div className="">
						
						<EditInput />
						</div>
					</li>
				))}

			</ul>
		</div >
	)
}


export function EditInput() {
	const [toggle, setToggle] = useState(false);
	const [text, setText] = useState("");

	function handleClick(str) {


	}

	function handleChange(e) {
		setText(e.target.value)
	}


	return (
		<div className="container">
			{toggle && (
				<div className="">
					<input className="col"value={text} onChange={handleChange} />
					<button className=" btn btn-primary" onClick={() => { handleClick(text); setToggle(false) }}>e</button>
				</div>
			)}
			{!toggle && (
				<div className="">
					<button className="edbutt btn btn-primary" onClick={() => setToggle(!toggle)}>edit</button>
				</div>
			)}
		</div>

	)
}
