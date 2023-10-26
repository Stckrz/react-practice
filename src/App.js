import './App.css';
import { BootstrapNavToggle } from './components/navbar/navbar';
import { DisplayForm, MyInput, MyInput2, } from './components/liveinput/liveinput';
import { ObjectList, DisplayCount } from './components/statestuff/statestuff';
import { ToDoList } from './components/todolist/todolist';
import { PlanetList } from './components/planets/planets';
import { Counter } from './components/counter/counter';
import { Parent } from './components/propsplay/propsplay';
import { ModalExample } from './components/modal/modal';
import { Faq } from './components/faq/faq';
import { StarRating } from './components/stars/stars';
import { Weather } from './components/weather/weather';
import { Carousel } from './components/carousel/carousel';
import { DarkMode } from './components/darkmode/darkmode';
import { createContext, useState } from 'react';

export const ThemeContext = createContext("light");

function App() {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		setTheme((current) => (current === "light" ? "dark" : "light"));
	}
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>



			<div className="App" id={ theme }>
				<BootstrapNavToggle />
				<DarkMode toggle={ toggleTheme } />
				<div className="container-md">
					<div className="row row-cols-4">
						<div className="col content"><MyInput /></div>
						<div className="col content"><PlanetList /></div>
						<div className="col content"><ToDoList /></div>
						<div className="col content"><Counter /></div>
						<div className="col content"><Parent /></div>
						<div className="col content"><ModalExample /></div>
						<div className="col content"><Faq /></div>
						<div className="col content"><StarRating /></div>
						<div className="col content"><Weather /></div>
						<div className="col content"><Carousel /></div>



					</div>
				</div>
			</div>
		</ThemeContext.Provider>
	);
}



const ColorPlay = (props) => {
	return (
		<div className="inline-stuff">
			{props.age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}
		</div>
	)
};

export default App;
