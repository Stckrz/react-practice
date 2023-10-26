import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, React } from 'react';
import './carousel.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWorm, faHippo, faOtter } from '@fortawesome/free-solid-svg-icons'


library.add(faWorm, faHippo, faOtter);
const worm = <FontAwesomeIcon icon="fa-worm fa-xs" bounce size="lg" />
const hippo = <FontAwesomeIcon icon="fa-hippo" />
const otter = <FontAwesomeIcon icon="fa-otter" />


let iconArray = [worm, hippo, otter];


export function Carousel() {
	const [currentIcon, setCurrentIcon] = useState(0);






	return (
		<>
			<div className='iconDisplay'>{iconArray[currentIcon]}</div>


			<button type="button"></button>

			<button type="button"></button>

			<button type="button"></button>
		</>






	)
}
