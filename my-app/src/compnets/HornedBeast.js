import React from 'react';

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
                <h2>{this.props.title}</h2>
                <img src={this.props.img} alt={this.props.title} onClick={this.imageClick} />
                <p> {this.props.description} </p>
                <p>❤️{this.state.startCounter}</p>
              

            </div>

        )
    }
}

export default HornedBeast;