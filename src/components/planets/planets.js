import { React, useState } from 'react'
import './planets.css';


export function PlanetList() {
	const planets = [
		{ name: "Mercury", isGasPlanet: false },
		{ name: "Venus", isGasPlanet: false },
		{ name: "Earth", isGasPlanet: false },
		{ name: "Mars", isGasPlanet: false },
		{ name: "Jupiter", isGasPlanet: true },
		{ name: "Saturn", isGasPlanet: true },
		{ name: "Neptune", isGasPlanet: true },
		{ name: "Uranus", isGasPlanet: true },
	]
	return (
		<div className="planetbox">
			
			{planets.map((planet, key) => {
				{
					return (
						<div>{planet.isGasPlanet && planet.name}</div>
					)
				}
			})}
		</div>
	);
}
