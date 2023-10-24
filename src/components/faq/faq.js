import { useState, React } from 'react';
import './faq.css';

export function Faq() {
	let [faqitems, setFaqitems] = useState([
		{ title: "First Thing", description: "This is the first thing", isShown: false },
		{ title: "Second Thing", description: "This is the second thing", isShown: false },
		{ title: "Third Thing", description: "This is the third thing", isShown: false },
		{ title: "Fourth Thing", description: "This is the fourth thing", isShown: true },
	])

	function handleShowClick(str) {
		let faqitemsCopy = [...faqitems]

		faqitemsCopy.map((item) => (item.isShown = false))

		let a = faqitemsCopy.find((obj) => { return obj.title === str; })
		a.isShown = true;

		setFaqitems(faqitemsCopy)
	}

	return (
		<div className="bigwrap">
			{faqitems.map((faqitem) => {
				{
					return (
						<div className="faqItemWrapper">
							<div className="title" onClick={() => { handleShowClick(faqitem.title) }}>
								<div>{faqitem.title}</div>
								<div className="shithole">{faqitem.isShown ? "-" : "+"}</div>
							</div>
							<div className="description">{faqitem.isShown && faqitem.description}</div>
						</div>
					)
				}
			})
			}
		</div>
	)
}
