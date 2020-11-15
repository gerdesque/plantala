import React, { Component } from 'react';
import Header from '../app-header/Header';
import Main from '../app-main/Main';
import Footer from '../app-footer/Footer';
import './Plantala.css';
import { plants } from '../plants';
import { IPlant } from '../plant/Plant';

interface IPlantalaState {
  plants: IPlant[],
  selectedPlants: IPlant[],
  activePlant: IPlant,
  storedNavigationValue: string,
}

class Plantala extends Component {
  state: IPlantalaState = {
    // values to be displayed in <Card />
    plants: plants,
    // plants selected for <AvatarGroup />
    selectedPlants: [],
    // active plant for <Plant />
    activePlant: {} as IPlant,
    // stored value to use for math operation
    storedNavigationValue: 'Start',
  }

  render = () => {
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
