import React from 'react';
import HornedBeast from './HornedBeast';

import CardColumns from 'react-bootstrap/CardColumns'



class Main extends React.Component {
    render () {
        return (
            <main>
          <div>
          <CardColumns>
            {
                this.props.HornedData.map((beast) => {
                    return (
                        <HornedBeast 
                            title={beast.title}
                            img={beast.image_url}
                            description={beast.description}
                            showModal={this.props.showModal}
                    
                            
                       />
                )
            })
        } 


</CardColumns>
        </div>
           </main>
        )
    }
}

export default Main;