import { useState } from 'react';
import './liveinput.css';

export function MyInput() {
	const [form, setForm] = useState({
		enterStuff: 'stuffs',
		buttontext: 'C',
	});

	return (
		<>
			<div className="wrapper container">
				<div className="row">
				<div className="col-6 inputContainer">
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
				</div>
				<div className="col-6">
					<p>{form.enterStuff}</p>
				</div>
				</div>
			</div>
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
