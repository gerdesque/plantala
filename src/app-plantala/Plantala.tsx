import React, { Component } from 'react';
import Sound, {ReactSoundProps} from 'react-sound';
import soundURL from '../assets/sounds/background.mp3';
import { AppContext } from './Context';
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
  sound: ReactSoundProps['playStatus'],
  isPlaying: boolean,
  colorMode: boolean,
  plants: IPlant[],
  action: Action,
  plantalaData: string,
  
}

class Plantala extends Component {
  state: IPlantalaState = {
    isPlaying: false,
    sound: 'STOPPED',
    colorMode: true,
    // values to be displayed in <Card />
    plants: plantItems.map(plant => ({...plant, selected: false, order: 0})),
    // action mode to be displayed in <Main />
    action: Action.Start,
    plantalaData: ''
  }

  setSound = (isPlaying: boolean) => {
    this.setState({isPlaying: !isPlaying, sound: !isPlaying ? 'PLAYING' : 'PAUSED'});
  }

  setColorMode = () => {
    this.setState({colorMode: !this.state.colorMode});
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
    const { isPlaying, sound, colorMode, plants, action, plantalaData } = this.state;
    const selectedPlants = plants.filter((plant) => (plant.selected === true)).sort((a, b) => a.order  - b.order )
    const activePlant = plants.filter((plant) => (plant.active === true))[0];

    return (
      <div className="plantala">
        <Sound
          url={soundURL}
          loop={true}
          playStatus={sound}
        />
        <AppContext.Provider value={colorMode}>
          <Header
            isPlaying={isPlaying}
            setSound={this.setSound}
            setColorMode={this.setColorMode}
          />
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
        </AppContext.Provider>
      </div>
    );
  }
}

export default Plantala;
