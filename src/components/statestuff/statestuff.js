import React from 'react'
import { useState } from 'react'



export function StateCount() {
	const users = [
		{ name: "Stckrz", age: 32 },
		{ name: "bob", age: 5 },
		{ name: "anna", age: 22 },
	];
	return (
		<div>
			{users.map((user, key) => {


				return (
					<div>
						<User name={user.name} age={user.age} />
					</div>
				);
			})}

		</div>
	);
}


export const User = (props) => {
	return (
		<div>
			{props.name} {props.age}
		</div>
	)
} 
