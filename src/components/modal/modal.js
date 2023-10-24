import React from 'react';
import { useState } from 'react';
import './modal.css';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export function ModalExample() {
	const [toggle, setToggle] = useState(false);

	const handleClose = () => setToggle(false);
	const handleShow = () => setToggle(true);



	return (
		<>
			<Button className="btn btn-primary" onClick={handleShow}>Modal?</Button>
			<div>

	
				<Modal show={toggle} onHide={handleClose}>	
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>This is a bootstrap modal..</Modal.Body>
					<Modal.Footer>
						<Button className="btn btn-primary" onClick={handleClose}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>

			</div>
		</>
	)


}
