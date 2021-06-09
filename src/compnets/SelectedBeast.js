import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';

export class SelectedBeast extends Component {
    render() {
        return (
            <div>
                <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Modal heading
        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Centered Modal</h4>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.
        </p>
                    </Modal.Body>
                    </Modal>
            </div>
        )
    }
}

export default SelectedBeast
