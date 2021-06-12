import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';

export class SelectedForm extends Component {
    render() {
        return (
            <div>
            <Container className="p-3">
                <Form.Control as="select" defaultValue="0" onChange={this.props.setNumberOfHorns}>
                    <option value="0">Show All Beasts</option>
                    <option value="1">1 Horn</option>
                    <option value="2">2 Horn</option>
                    <option value="3">3 Horn</option>
                    <option value="100">Alot</option>
                </Form.Control>
                <br />
            </Container>
        </div>
        )
    }
}

export default SelectedForm
