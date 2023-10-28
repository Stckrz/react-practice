import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './weather.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCloudBolt, faCloud, faSun, faCloudSun, faCloudRain } from '@fortawesome/free-solid-svg-icons'

library.add(faCloudBolt, faCloud, faSun, faCloudSun, faCloudRain);
const cloud = <FontAwesomeIcon icon="fa-cloud" />
const cloudsun = <FontAwesomeIcon icon="fa-cloud-sun" />
const rain = <FontAwesomeIcon icon="fa-cloud-rain" />
const sun = <FontAwesomeIcon icon="fa-sun" />
const thunder = <FontAwesomeIcon icon="fa-cloud-bolt" />

const weatherURL = 'https://api.weather.gov/gridpoints/SGF/67,35/forecast/hourly';


export function Weather() {

	const [currentTemp, setCurrentTemp] = useState([]);
	const [clouds, setClouds] = useState([])

	useEffect(() => {
		axios.get(weatherURL).then((response) => {
			let temperature = response.data.properties.periods[0].temperature;
			let clouds = response.data.properties.periods[0].shortForecast;

			setCurrentTemp(temperature);
			setClouds(clouds);
		});

	}, []);

	if (!currentTemp) return (null);

	function cloudIconHandler(clouds) {
		let cloudIcon="";
		let conditionArray=[
			"Partly Sunny", 
			"Partly Cloudy", 
			"Cloudy", 
			"Sunny", 
			"Rainy", 
			"Mostly Cloudy", 
			"Showers And Thunderstorms Likely", 
			"Chance Showers And Thunderstorms",
			"Scattered Showers And Thunderstorms"
		]
		switch (conditionArray.indexOf(clouds)) {
			case 0:
				cloudIcon = (cloudsun);
				break;
			case 1:
				cloudIcon = cloudsun;
				break;
			case 2:
				cloudIcon = cloud;
				break;
			case 3:
				cloudIcon = sun;
				break;
			case 4:
				cloudIcon = rain;
				break;
			case 5:
				cloudIcon = cloud;
				break;
			case 6:
				cloudIcon = thunder;
				break;
			case 7:
				cloudIcon = thunder;
				break;
			case 8:
				cloudIcon = thunder;
				break;
			case -1:
				cloudIcon = clouds;
				break;
		}{
			return (cloudIcon)

		}
	}

	return (
		<div className="displayWeather">
			<div className="cityname">Springfield:</div>
			<h2>{cloudIconHandler(clouds)}  {currentTemp}</h2>

		</div>

	);


}
