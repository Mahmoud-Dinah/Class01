import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

export class SelectedForm extends Component {
    render() {
        return (
            <div>
                 <Form.Control as="select" defaultValue="0">
  <option>Select Horn Number to show</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Control>
            </div>
        )
    }
}

export default SelectedForm
