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
  activePlant: IPlant,
  action: Action
}

class Plantala extends Component {
  state: IPlantalaState = {
    // values to be displayed in <Card />
    plants: plantItems,
    // active plant for <Plant />
    activePlant: {} as IPlant,
    // action mode to be displayed in <Main />
    action: Action.Start,
  }

  setAction = () => {
    this.setState({action: nextAction.next().value});
  }

  activatePlant = (selectedPlant:IPlant) => {
    const filteredArray =
      this.state.plants.map(plant => plant === selectedPlant ? { ...plant, active: !plant.active } : plant);
    this.setState({ plants: filteredArray })
  }

  highlightPlant = (selectedPlant:IPlant) => {
    const filteredArray =
      this.state.plants.map(plant => plant === selectedPlant ? { ...plant, highlighted: !plant.highlighted } : { ...plant, highlighted: false });
    this.setState({ plants: filteredArray })
  }

  plantTransform = (transformName:string, newValue:number) => {
    const filteredArray =
      this.state.plants.map(plant => plant.highlighted === true ? { ...plant, [transformName]: newValue } : plant);
    this.setState({ plants: filteredArray })
  }

  render = () => {
    const { plants, action } = this.state;
    const selectedPlants = plants.filter((plant) => (plant.active === true));
    return (
      <div className="plantala">
        <Header />
        <Main
          plants={plants}
          selectedPlants={selectedPlants}
          action={action}
          setAction={this.setAction}
          setSelectedPlant={this.activatePlant} />
        <Footer
          selectedPlants={selectedPlants}
          setHighlightedPlant={this.highlightPlant}
          setPlantTransform={this.plantTransform}
           />
      </div>
    );
  }
}

export default Plantala;
