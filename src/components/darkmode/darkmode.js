import React, { useState } from 'react';
import './darkmode.css';



export function DarkMode(props) {
const {toggle} = props;

	return (
		<label class="switch">
			<input type='checkbox' onChange={toggle}></input>
			<span class="slider round"></span>
		</label>
	)
}
