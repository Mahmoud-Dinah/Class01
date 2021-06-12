import React from 'react';
import HornedBeast from './HornedBeast';

import CardColumns from 'react-bootstrap/CardColumns'



class Main extends React.Component {
    render () {
        return (
            <main>
          <div>
          <CardColumns  >
            {/* {
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
        }  */}

{
                    this.props.HornedData.map(beast => {

                        if(this.props.numberOfHorns == 0){
                            return <HornedBeast key={beast.title} 
                            title={beast.title}
                            img={beast.image_url}
                            description={beast.description}
                            showModal={this.props.showModal}
                        
                            setModalShow={() => this.props.showModal}
                            showModal={this.props.showModal}
                            />;
                        }
                        else if(this.props.numberOfHorns == beast.horns){
                            return <HornedBeast key={beast.title} 
                            title={beast.title}
                            img={beast.image_url}
                            description={beast.description}
                            showModal={this.props.showModal}
                        
                            setModalShow={() => this.props.showModal}
                            setModalContent={this.props.showModal}
                            />
                        }
                    })
                        
                }   

</CardColumns>
        </div>
           </main>
        )
    }
}

export default Main;