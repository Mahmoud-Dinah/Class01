import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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

                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 2 }).map((_, idx) => (
                        <Col>

                            <Card border="danger" style={{ width: '18rem', color: 'white', backgroundColor: 'black' }}>
                                <Card.Img variant="top"  alt={this.props.title} onClick={()=> {
                                this.imageClick();
                                this.props.showModal(
                                    this.props.title,
                                    this.props.img,
                                    this.props.description
                                )   
                                }} src={this.props.img} />
                                <Card.Body>
                                    <Card.Title>{this.props.title}</Card.Title>
                                    <Card.Text>
                                        {this.props.description}
                                      ❤️{this.state.startCounter}
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}

export default HornedBeast;