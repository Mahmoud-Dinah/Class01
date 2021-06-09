import React from 'react';
import Header from './compnets/Header';
import Main from './compnets/Main';
import HornedData from './compnets/data.json';
import SelectedBeast from './compnets/SelectedBeast';
import Footer from './compnets/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedForm from './compnets/SelectedForm'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selectedBeastTitle : '' ,
      selectedBeastImg :'' ,
      selectedBeastDes :  '' , 
 
    }
  }



  showModal = (title , img, description) => {
    console.log(title);
    this.setState({ 
    show: !this.state.show,
    selectedBeastTitle : title ,
      selectedBeastImg :img ,
      selectedBeastDes :  description , 
    })
   
  }

  render() {
    return (
      <div style={{ textAlign: 'center', }}>




        <Header />

        <SelectedForm
      

      />
        <Main
          HornedData={HornedData}
          showModal={this.showModal}
         
        />

        <SelectedBeast 
        show={this.state.show}
        notShow={this.state.notShow}
        title={this.state.selectedBeastTitle}
        img={this.state.selectedBeastImg}
        description={this.state.selectedBeastDes}
        showModal={this.showModal}
        />
        <Footer />

     

      </div>
    )
  }
}

export default App;
