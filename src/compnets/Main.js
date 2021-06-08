import React from 'react';
import HornedBeast from './HornedBeast';
import HornedData from './data.json';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Card'

class Main extends React.Component {
    render () {
        return (
            <main>
          <div>
            {
                HornedData.map((beast) => {
                    return (
                        <HornedBeast 
                            title={beast.title}
                            img={beast.image_url}
                            description={beast.description}
                            
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