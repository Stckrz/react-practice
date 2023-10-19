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
		<div>
			<div>
				<input className="form-control me-2 inputBox" value={text} onChange={handleChange} />
				<button className="btn btn-primary" onClick={handleClick}>Add</button>

			</div>
			<ul>
				{list.map((item) => (

					<li className="listItem">
						<button
							className="btn btn-sm btn-primary"
							onClick={() => handleRemoveClick(item)}
						>x</button>
						{item}
						<EditInput />
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
		<div>
			{toggle && (
				<div>
					<input value={text} onChange={handleChange} />
					<button onClick={() => { handleClick(text); setToggle(false) }}>e</button>
				</div>
			)}
			{!toggle && (
				<div>
					<button onClick={() => setToggle(!toggle)}>edit</button>
				</div>
			)}
		</div>

	)
}
