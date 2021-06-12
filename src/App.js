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
      selectedBeastTitle: '',
      selectedBeastImg: '',
      selectedBeastDes: '',
      numberOfHorns : 0,
      selectedBeastsShow : false

    }
  }
  setNumberOfHorns = (e) => {
    e.preventDefault();
    this.setState({
      numberOfHorns : e.target.value
    })
    this.setSelectedShow();
  }

  setSelectedShow = () => {
    this.setState({
      selectedBeastsShow: true
    })
  }


  showModal = (title, img, description) => {
    console.log(title);
    this.setState({
      show: !this.state.show,
      selectedBeastTitle: title,
      selectedBeastImg: img,
      selectedBeastDes: description,
    })

  }
  handelClose = () => {
    this.setState({
      show: false
    })
  }

  render() {
    return (
      <div style={{ textAlign: 'center', }}>

        <Header />

        <SelectedForm setNumberOfHorns={this.setNumberOfHorns} />

        <Main
          HornedData={HornedData}
          showModal={this.showModal}
          numberOfHorns={this.state.numberOfHorns}
          selectedBeastsShow={this.state.selectedBeastsShow}

        />

        <SelectedBeast
          show={this.state.show}

          title={this.state.selectedBeastTitle}
          img={this.state.selectedBeastImg}
          description={this.state.selectedBeastDes}
          showModal={this.showModal}
          handelClose={this.handelClose}
        />
        <Footer />



      </div>
    )
  }
}

export default App;
