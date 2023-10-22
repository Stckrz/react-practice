import { useState, React } from "react";
import './counter.css';
import { Transition } from 'react-transition-group';


export function Counter() {
	let [count, setCount] = useState(0);
	let [cssClass, setCssClass] = useState("");

	function handleIncrement() {
		setCount(count += 1);
		setCssClass("roll-in");
	};

	function handleDecrement() {
		setCount(count -= 1);
		setCssClass("roll-out");
	};

	function handleReset() {
		setCount(0);
		setCssClass("roll-out");
	};

	return (
		<div className="Wrapper">
			<button onClick={handleDecrement} className="nuttin">-</button>
			<div className="countBox">
				<div key={count} className={cssClass}>
					{count}
				</div>
			</div>
			<button onClick={handleIncrement} className="nuttin">+</button>
			<button onClick={handleReset} className="btn btn-primary">reset</button>

		</div>

	)
}
