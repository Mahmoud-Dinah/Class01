import React from 'react';
import Header from './compnets/Header';
import Main from './compnets/Main';
import Footer from './compnets/Footer';



class App extends React.Component {
  render(){
    return(
    <div>

      <Header/>
      <Main/>
      <Footer/>

    </div>
    )
  }
}

export default App;
