import React from 'react';

class HornedBeast extends React.Component {
    render () {

        const imageClick = () => {
            console.log('Click');
          } 
        return (
            <main>
                <div>
            <h2>{this.props.title}</h2>
            <img src={this.props.img} alt={this.props.title}  onClick={() => imageClick()}/>
           <p> {this.props.description} </p>

           </div>
           </main>
        )
    }
}

export default HornedBeast;