import React from 'react';
import HornedBeast from './HornedBeast';



class Main extends React.Component {
    render () {
        return (
            <main>
          <div>
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


        
        </div>
           </main>
        )
    }
}

export default Main;