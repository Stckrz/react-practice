import React from 'react';
import { useState } from 'react';


export default function tasklist({
	todos,
	onChangeTodo,
	onDeleteTodo


}) {
	return (
		<ul>
			{todos.map(todo => (
				<li key={todo.id}>
					<Task
						todo={todo}
						onChange={onChangeTodo}
						onDelete={onDeleteTodo}
					/>
				</li>
			))}
		</ul>
	);
}

}
