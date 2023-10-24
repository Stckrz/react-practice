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
			<div className="listBox">
			<ul className="">
				{list.map((item) => (

					<li className="listItem listAnimation">
						<button

							className="btn btn-sm btn-primary"
							onClick={() => handleRemoveClick(item)}
						>x</button>
						<div className="editdiv">
							<EditInput item={item} list={list} setList={setList}/>
						</div>
						<div className="item">
							{item}
						</div>
					</li>
				))}

			</ul>
			</div>
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
				<div className="editdiv">
					<input className="" value={text} onChange={handleChange} />
					<button className="btn btn-sm btn-primary" 
					onClick={() => { setText(""); handleClick(text); setToggle(false) }}>e</button>
				</div>
			)}
			{!toggle && (
				<div className="">
					<button className="btn btn-sm btn-primary" onClick={() => {handleClick(""); setToggle(!toggle)}}>e</button>
				</div>
			)}
		</div>

	)
}
