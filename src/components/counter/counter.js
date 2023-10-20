import { useState, React } from "react";


export function Counter() {
	let [count, setCount] = useState(0);

	function handleIncrement() {
		setCount(count += 1);
	};

	function handleDecrement() {
		setCount(count -= 1);
	};

	function handleReset() {
		setCount(0);
	};

	return (
		<div>
			<button onClick={handleDecrement} className="btn btn-primary">-</button>
			{count}
			<button onClick={handleIncrement} className="btn btn-primary">+</button>
			<button onClick={handleReset} className="btn btn-primary">reset</button>
		</div>

	)
}
