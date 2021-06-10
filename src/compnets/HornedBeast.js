import React from 'react';
import Card from 'react-bootstrap/Card'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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


                {Array.from({ length: 1 }).map((_, idx) => (

                    <Container>
                        <Row className="justify-content-md-center">
                        <Col xs lg="8">
                            <Card bg='dark' text= 'warning' border="danger" style={{ width: '18rem', color: 'white' }}>
                                <Card.Img variant="top" alt={this.props.title} onClick={() => {
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
                                   
                                </Card.Body>
                            </Card>
                            </Col>

                        </Row>

                    </Container>
                ))}

            </div>
        )
    }
}

export default HornedBeast;