import React from 'react';
import { useState } from 'react';
import './todolist.css';

export function ToDoList() {
	const [list, setList] = useState([]);
	const [text, setText] = useState("");

	function handleChange(e) {
		setText(e.target.value)
	}

	function addTask() {
		const task = {
			id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
			taskName: text,
			completed: false,
		};
		setList([...list, task])
		setText("")
	}

	function handleRemoveClick(id) {
		setList(list.filter((task) => task.id !== id));
	}

	function handleCompleteTask(id){
		setList(
			list.map((task)=>{
				if (task.id === id){
					return {...task, completed: true};
				}else{
				return task;
				}
			})
		)
	}

	return (
		<div className="wrapper container">
			<div className=" inputBox">
				<div className="">
					<input className="form-control me-2" value={text} onChange={handleChange} />
				</div>
				<button className="btn btn-primary" onClick={addTask}>Add</button>

			</div>
			<div className="listBox">
				<ul className="listBox">
					{list.map((item) => (

						<li className="listItem listAnimation">
							<button
								className="btn btn-sm btn-primary"
								onClick={() => handleRemoveClick(item.id)}
							>x</button>

							<button
								className="btn btn-sm btn-primary"
								onClick={()=> handleCompleteTask(item.id)}
							>c</button>

							<div className="editdiv">
								<EditInput item={item} list={list} setList={setList}/>
							</div>

							<div className="item" style={{ backgroundColor: item.completed ? "#57B86D" : "#CAE0EF" }}>
								{item.taskName}
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

	function handleEdit() {
		setList(
			list.map((task)=>{
				if (task.id === item.id){
					return {...task, taskName: text};
				}else{
					return task;
				}
				})
		)

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
					onClick={() => { setText(""); handleEdit(text); setToggle(false) }}>e</button>
				</div>
			)}
			{!toggle && (
				<div className="">
					<button className="btn btn-sm btn-primary" onClick={() => {handleEdit(""); setToggle(!toggle)}}>e</button>
				</div>
			)}
		</div>

	)
}
