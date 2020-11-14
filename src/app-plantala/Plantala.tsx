import React, { Component } from 'react';
import Header from '../app-header/Header';
import Main from '../app-main/Main';
import Footer from '../app-footer/Footer';
import './Plantala.css';

interface IPlant {
  name: string,
  source: string
}

interface IPlantalaState {
  plants: [],
  selectedPlants: IPlant[],
  storedNavigationValue: string,
}

class Plantala extends Component {
  state: IPlantalaState = {
    // values to be displayed in <Card />
    plants: [],
    // plants selected for <Plant />
    selectedPlants: [
      {name: '1', source: '1.png'},
      {name: '2', source: '2.png'},
      {name: '3', source: '3.png'},
      {name: '4', source: '4.png'},
      {name: '5', source: '5.png'}
    ],
    // stored value to use for math operation
    storedNavigationValue: 'Start',
  }

  render = () => {
    // unpack the component state by using Object Destructuring
    const { plants, selectedPlants, storedNavigationValue } = this.state;

    return (
      <div className="plantala">
        <Header />
        <Main
          plants={plants}
          storedNavigationValue={storedNavigationValue}/>
        <Footer
          selectedPlants={selectedPlants} />
      </div>
    );
  }
}

export default Plantala;
