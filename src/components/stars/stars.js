// import { Dropdown } from 'bootstrap';
import React from 'react';
import { useState } from 'react';
import './stars.css';
import Dropdown from 'react-bootstrap/Dropdown';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faStar as faStarFull,
	faHeart as faHeartFull,
	faThumbsUp as faThumbsUpFull
} from '@fortawesome/free-solid-svg-icons';
import {
	faStar as faStarRegular,
	faHeart as faHeartRegular,
	faThumbsUp as faThumbsUpRegular
} from '@fortawesome/free-regular-svg-icons';

library.add(
	faStarFull,
	faStarRegular,
	faHeartFull,
	faHeartRegular,
	faThumbsUpFull,
	faThumbsUpRegular
);

const emptyStar = <FontAwesomeIcon icon="fa-regular fa-star" />
const fullStar = <FontAwesomeIcon icon="fa-solid fa-star" />
const emptyHeart = <FontAwesomeIcon icon="fa-regular fa-heart" />
const fullHeart = <FontAwesomeIcon icon="fa-solid fa-heart" />
const emptyThumbs = <FontAwesomeIcon icon="fa-regular fa-thumbs-up" />
const fullThumbs = <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />


export function StarRating() {
	let [stars, setStars] = useState(Array(5).fill(emptyStar))
	let [startype, setStarType] = useState([emptyStar, fullStar])


	function handleRatingClick(index, startype) {
		let starsCopy = [...stars];
		for (let i = 0; i < starsCopy.length; i++) {
			i <= index ? starsCopy[i] = startype[1] : starsCopy[i] = startype[0];
		}
		setStars(starsCopy);
	}


	function handleSelectStar(a, b) {

		let starsCopy = [];
		for (let i = 0; i < 5; i++) {
			starsCopy.push(a);
		}
		setStars(starsCopy);
		setStarType([a, b])
	}


	function renderStars() {
		return stars.map((item, key) => {
			return (<div class="star"
				onClick={() => { handleRatingClick(key, startype) }}
			>{item}</div>)
		})
	}


	return (
		<>
			<div>
				<div className="starcontainer">
					{renderStars()}
				</div>
				<Dropdown>
					<Dropdown.Toggle variant="primary" id="dropdown-basic">
						Rating Icon
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item
							onClick={() => {
								handleSelectStar(emptyStar, fullStar);
							}}>Star{fullStar}</Dropdown.Item>
						<Dropdown.Item
							onClick={() => {
								handleSelectStar(emptyHeart, fullHeart);
							}}>Heart{fullHeart}</Dropdown.Item>
						<Dropdown.Item
							onClick={() => {
								handleSelectStar(emptyThumbs, fullThumbs);
							}}>Thumbs Up{fullThumbs}</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</>

	)

}

