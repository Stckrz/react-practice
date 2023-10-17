import './App.css';
import { useState } from 'react';
import { BootstrapNavToggle } from './components/navbar/navbar';
import { DisplayForm, MyInput, MyInput2, AppendList } from './components/liveinput/liveinput';
import { StateCount, DisplayCount } from './components/statestuff/statestuff';


function App() {
	const age = 17;
	return (
			<div className="App">
				<BootstrapNavToggle />
				<div className="bigWrap">
					<div className="content-wrapper"><StatePlay /></div>
					<div className="content-wrapper"><MyInput /></div>
					<div className="content-wrapper"><MyInput2 /></div>
					<div className="content-wrapper"><StateCount /></div>
					<div className="content-wrapper"><AppendList /></div>
			</div>
		</div>
	);
}

const User = (props) => {
	return (
		<div className="content">
			<h1>{props.name}</h1>
			<h1>{props.age}</h1>
			<h1>{props.email}</h1>
		</div>
	);
};

const Job = (props) => {
	return (
		<div className="content">
			<h1>{props.salary}</h1>
			<h1>{props.position}</h1>
			<h1>{props.company}</h1>
			<br />
		</div>
	)
};

const ColorPlay = (props) => {
	return (
		<div className="inline-stuff">
			{props.age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}
		</div>
	)
};

function ShowComponent() {
	const [isShown, setIsShown] = useState(false);

	return (
		<div>
			<button onClick={() => setIsShown(!isShown)}>Click</button>
			{isShown && (
				<BootstrapNavToggle />
			)}
		</div>
	)
}



function StatePlay() {
	const [addValue, setAddValue] = useState(1);
	const [multiplyValue, setMultiplyValue] = useState(1);

	function doStuff() {
		setAddValue(addValue + 1);
		setMultiplyValue(multiplyValue * 2);
	}

	return (
			<div className="content">
				<h1>Add one: ({addValue})! <br /> Multiply by two:({multiplyValue})!</h1>
				<button
					type="button"
					className="btn btn-primary"
					onClick={() => doStuff()}
				>Increment</button>
			</div>
	)
}










export default App;
