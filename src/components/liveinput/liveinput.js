import { useState } from 'react';
import { useRef } from 'react';


export function MyInput() {
	const [form, setForm] = useState({
		enterStuff: 'stuffs',
		buttontext: 'assycheeks',
	});

	return (
		<>
			<label>
				<input
					className="form-control me-2"
					value={form.enterStuff}
					onChange={e => {
						setForm({
							...form,
							enterStuff: e.target.value
						});
					}}
				/>
				<button
					className="btn btn-primary"
					onClick={() => setForm({ ...form, enterStuff: "buttstuff" })}>{form.buttontext}
				</button>
			</label>
			<p>{form.enterStuff}</p>
		</>
	);
}

export function MyInput2() {
	const [text, setText] = useState('stuffs');

	function handleChange(e) {
		setText(e.target.value);

	}

	return (
		<>
			<label>
				<input
					className="form-control me-2"
					value={text}
					onChange={handleChange} />
				<button className="btn btn-primary" onClick={() => setText("buttstuff")}>aaah</button>
				<p>{text}</p>
			</label>
		</>
	);
}

export function AppendList() {
	const [list, setList] = useState([
		"balls",
		"bepis"
	])
	const [text, setText] = useState("")
	let listCopy = [...list];

	function handleChange(e) {
		setText( e.target.value )
	}

	function handleClick() {
		listCopy.push(text);
		setList([...listCopy]);
		setText("")
	}

	return (
		<div>
			<div>
				<input className="form-control me-2 inputBox" value={text} onChange={handleChange} />
				<button className="btn btn-primary" onClick={handleClick}>Add</button>

			</div>
			<ul>
				{list.map((item) => (

					<li>
						{item}
					</li>
				))}

			</ul>
		</div >

	)
}

// <button onClick={() => setForm("buttstuff")}>aaah</button>

{/*
export function DisplayForm(props) {
  return (
    <div>
      <p>hello</p> 
    </div>

  );
};
  */}
