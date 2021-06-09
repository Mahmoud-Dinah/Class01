import React from 'react';
import Header from './compnets/Header';
import Main from './compnets/Main';
import HornedData from './data.json';
import Footer from './compnets/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {
  render(){
    return(
    <div style={{textAlign:'center',}}>

      <Header/>
      <Main/>
      <Footer/>

    </div>
    )
  }
}

export default App;
