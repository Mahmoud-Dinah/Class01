import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Card'

class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            startCounter: 0,
        }
    }

    imageClick = () => {
        let incCount = this.state.startCounter;
        this.setState({
            startCounter: incCount + 1,
        })
    }

    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.img} alt={this.props.title} onClick={this.imageClick} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    {this.props.description}
    ❤️{this.state.startCounter}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
            </div>
        )
    }
}

export default HornedBeast;