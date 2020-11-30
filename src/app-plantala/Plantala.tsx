import React, { Component } from 'react';
import Header from '../app-header/Header';
import Main from '../app-main/Main';
import Footer from '../app-footer/Footer';
import './Plantala.css';
import { plantItems } from '../plantItems';
import { IPlant } from '../plant/Plant';
import { orderSelectedPlant, reorderSelectedPlant } from '../utils/Utils';

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
  action: Action,
  plantalaData: string
}

class Plantala extends Component {
  state: IPlantalaState = {
    // values to be displayed in <Card />
    plants: plantItems.map(plant => ({...plant, selected: false, order: 0})),
    // action mode to be displayed in <Main />
    action: Action.Start,
    plantalaData: ''
  }

  setAction = () => {
    this.setState({action: nextAction.next().value});
  }

  selectedPlants = (selectedPlant:IPlant) => {
    const isSelected = selectedPlant.selected;
    const plantOrder = isSelected ? 0 : this.state.plants.filter(plant => plant.selected === true).length + 1;
    const selectedPlantsArray =
      this.state.plants.map(
        plant => plant === selectedPlant ? orderSelectedPlant(plant, plantOrder) : reorderSelectedPlant(plant, isSelected)
      );
    this.setState({ plants: selectedPlantsArray });
  }

  activatedPlants = (activePlant: IPlant) => {
    const activatedPlantsArray =
      this.state.plants.map(plant => plant === activePlant ? { ...plant, active: true } : { ...plant, active: false });
    this.setState({ plants: activatedPlantsArray });
  }

  transformPlant = (transformedPlant: IPlant, transformName:string, newValue:number) => {
    const transformedPlantsArray =
      this.state.plants.map(plant => plant === transformedPlant ? { ...plant, [transformName]: newValue } : plant);
    this.setState({ plants: transformedPlantsArray });
  }

  setPlantalaData = (plantalaData: string) => {
    this.setState({ plantalaData: plantalaData });
  }

  render = () => {
    const { plants, action, plantalaData } = this.state;
    const selectedPlants = plants.filter((plant) => (plant.selected === true)).sort((a, b) => a.order  - b.order )
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
          plantalaData={plantalaData}
          setPlantalaData={this.setPlantalaData}
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
