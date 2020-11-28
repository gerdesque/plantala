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
  action: Action
}

class Plantala extends Component {
  state: IPlantalaState = {
    // values to be displayed in <Card />
    plants: plantItems.map(plant => ({...plant, selected: false, order: 0})),
    // action mode to be displayed in <Main />
    action: Action.Start,
  }

  setAction = () => {
    this.setState({action: nextAction.next().value});
  }

  private orderSelectedPlant(plant: IPlant, plantOrder: number): IPlant {
    return { ...plant, selected: !plant.selected, order: plantOrder };
  }

  private reorderSelectedPlants(plant: IPlant, isSelected: boolean): IPlant {
    return isSelected && plant.selected ? { ...plant, order: plant.order === 1 ? 1 : plant.order - 1 } : plant;
  }

  selectedPlants = (selectedPlant:IPlant) => {
    const isSelected = selectedPlant.selected;
    const plantOrder = isSelected ? 0 : this.state.plants.filter(plant => plant.selected === true).length + 1;
    const selectedPlantsArray =
      this.state.plants.map(
        plant => plant === selectedPlant ? this.orderSelectedPlant(plant, plantOrder) : this.reorderSelectedPlants(plant, isSelected)
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

  render = () => {
    const { plants, action } = this.state;
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
