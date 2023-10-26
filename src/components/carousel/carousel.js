import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, React } from 'react';
import './carousel.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWorm, faHippo, faOtter } from '@fortawesome/free-solid-svg-icons'


library.add(faWorm, faHippo, faOtter);
const worm = <FontAwesomeIcon icon="fa-worm fa-xs" />
const hippo = <FontAwesomeIcon icon="fa-hippo"  />
const otter = <FontAwesomeIcon icon="fa-otter"  />




export function Carousel() {
	const [images, setImages] = useState([
		{ title: "worm", icon: worm, isShown: false },
		{ title: "hippo", icon: hippo, isShown: false },
		{ title: "otter", icon: otter, isShown: false }
	])
	const [currentIcon, setCurrentIcon] = useState(images[0]);

	function handleShowClick(str) {
		let imagesCopy = [...images]
		imagesCopy.map((item) => (item.isShown = false));
		let a = imagesCopy.find((obj) => {return obj.title === str;})
		a.isShown = true;
		setImages(imagesCopy)
	}


	return (
		<>
			<div className="wrapper">
				<div className='iconDisplay'>{currentIcon.icon}</div>

				<div className="buttonwrap">
					{images.map((image, key) => {
						{
							return (
								<button type="button" className={`${image.title} circlebutt`} 
									onClick={()=> {
									handleShowClick(image.title); 
									setCurrentIcon(images[key]);
								} }></button>
							)
						}
					})
					}
				</div>
			</div>
		</>
	)
}
