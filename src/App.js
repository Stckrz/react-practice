import './App.css';
import { BootstrapNavToggle } from './components/navbar/navbar';
import { DisplayForm, MyInput, MyInput2, } from './components/liveinput/liveinput';
import { ObjectList, DisplayCount } from './components/statestuff/statestuff';
import { ToDoList } from './components/todolist/todolist';
import { PlanetList } from './components/planets/planets';
import { Counter } from './components/counter/counter';
function App() {
	return (
		<div className="App">
			<BootstrapNavToggle />
			<div className="container-md">
				<div className="row row-cols-4">
					<div className="col content"><MyInput /></div>
					<div className="col content"><MyInput2 /></div>
					<div className="col content"><PlanetList /></div>
					<div className="col content"><ToDoList /></div>
					<div className="col content"><Counter /></div>
				</div>
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


const ColorPlay = (props) => {
	return (
		<div className="inline-stuff">
			{props.age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}
		</div>
	)
};

export default App;
