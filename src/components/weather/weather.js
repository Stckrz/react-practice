import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './weather.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCloud, faSun, faCloudSun, faCloudRain } from '@fortawesome/free-solid-svg-icons'

library.add(faCloud, faSun, faCloudSun, faCloudRain);

const weatherURL = 'https://api.weather.gov/gridpoints/SGF/67,35/forecast/hourly';

const cloud = <FontAwesomeIcon icon="fa-cloud" />
const cloudsun = <FontAwesomeIcon icon="fa-cloud-sun" />
const rain = <FontAwesomeIcon icon="fa-cloud-rain" />
const sun = <FontAwesomeIcon icon="fa-sun" />



export function Weather() {

	const [currentTemp, setCurrentTemp] = useState([]);
	const [clouds, setClouds] = useState([])
	const [cloudIcon, setCloudIcon] = useState()

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
		let conditionArray=["Partly Sunny", "Partly Cloudy", "Cloudy", "Sunny", "Rainy"]
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
