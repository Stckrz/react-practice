import React from 'react';
import { useState, useEffect } from 'react';
import './lifecycle.css'

export const Text = () => {
	const [text, setText] = useState("");


useEffect(()=>{
console.log("component mounted");

		return () => {
console.log("component unmounted");
		}
	}, []);
	return (
		<div>
			<input
				onChange={(event) => {
					setText(event.target.value);
				}}
			/>
			<p> {text} </p>
		</div>
	);
};
