import { useState } from 'react';
import { Text } from "./text";
import './lifecycle.css'
export function LifeCycle() {
	const [showText, setShowText] = useState(false);


	return (
		<div className="lifecycles">
			<button
				className="btn btn-sm btn-primary"
				onClick={() => {
					setShowText(!showText);
				}}
			>
				Show Text
			</button>

			{showText && <Text />}
			</div>
	);

}
