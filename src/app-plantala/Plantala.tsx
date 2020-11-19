import React, { Component } from 'react';
import Header from '../app-header/Header';
import Main from '../app-main/Main';
import Footer from '../app-footer/Footer';
import './Plantala.css';
import { plantItems } from '../plantItems';
import { IPlant } from '../plant/Plant';

export enum Action {
  Start = "Start",
  Select = "Select",
  Done = "Done",
  Again = "Again"
}

interface IPlantalaState {
  plants: IPlant[],
  selectedPlants: IPlant[],
  activePlant: IPlant,
  action: Action
}

class Plantala extends Component {
  state: IPlantalaState = {
    // values to be displayed in <Card />
    plants: plantItems,
    // plants selected for <AvatarGroup />
    selectedPlants: plantItems,
    // active plant for <Plant />
    activePlant: {} as IPlant,
    // action mode to be displayed in <Main />
    action: Action.Start,
  }

  setAction = () => {
    this.setState({action: Action.Select});
  }

  render = () => {
    const { plants, selectedPlants, action } = this.state;

    return (
      <div className="plantala">
        <Header />
        <Main
          plants={plants}
          action={action}
          setAction={this.setAction} />
        <Footer
          selectedPlants={selectedPlants} />
      </div>
    );
  }
}

export default Plantala;
