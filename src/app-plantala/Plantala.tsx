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

function* getNextAction(): IterableIterator<Action> {
  let current = Action.Start;
  while (true) {
    yield current;
    yield Action.Select;
    yield Action.Done;
    yield Action.Again;
  }
}

const nextAction = getNextAction();
nextAction.next();

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
    // active plant for <Plant />
    selectedPlants: [],
    // active plant for <Plant />
    activePlant: {} as IPlant,
    // action mode to be displayed in <Main />
    action: Action.Start,
  }

  setAction = () => {
    this.setState({action: nextAction.next().value});
  }

  selectedPlants = (selectedPlant:IPlant) => {
    const selectedPlantsArray =
      this.state.plants.map(plant => plant === selectedPlant ? { ...plant, selected: !plant.selected } : plant);
    this.setState({ plants: selectedPlantsArray });
  }

  activatedPlants = (activePlant: IPlant) => {
    const activatedPlantsArray =
      this.state.plants.map(plant => plant === activePlant ? { ...plant, active: true } : { ...plant, active: false });  
    this.setState({ plants: activatedPlantsArray });
  }

  transformPlant = (transformedPlant: IPlant, transformName:string, newValue:number) => {
    const filteredArray =
      this.state.plants.map(plant => plant === transformedPlant ? { ...plant, [transformName]: newValue } : plant);
    this.setState({ plants: filteredArray });
  }

  render = () => {
    const { plants, action } = this.state;
    const selectedPlants = plants.filter((plant) => (plant.selected === true));
    const activePlant = plants.filter((plant) => (plant.active === true))[0];

    return (
      <div className="plantala">
        <Header />
        <Main
          plants={plants}
          selectedPlants={selectedPlants}
          action={action}
          setAction={this.setAction}
          setSelectedPlant={this.selectedPlants}
        />
        <Footer
          selectedPlants={selectedPlants}
          activePlant={activePlant}
          setActivePlant={this.activatedPlants}
          transformPlant={this.transformPlant}
        />
      </div>
    );
  }
}

export default Plantala;
