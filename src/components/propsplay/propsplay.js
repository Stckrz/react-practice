import { useState } from 'react';


export function Parent() {
	let [text, setText] = useState("balls")

	return (
		<div><Child setText={setText} text={text} /></div>

	)
}

export function Child(props) {
	let a = props.setText
	let b = props.text
	function clickHandler() {
		a(b === "balls" ? "hellooo" : "balls");
	}

	return (
		<div>
			<button className="btn btn-primary" onClick={clickHandler}>ayooo</button>
			<div>{b}</div>
		</div>


	)
}





