import React, { Component } from 'react';
import Sound, {ReactSoundProps} from 'react-sound';
import soundURL from '../assets/sounds/background.mp3';
import { AppContext } from './Context';
import Imprint from './Imprint';
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

interface IPlantalaState {
  sound: ReactSoundProps['playStatus'],
  isPlaying: boolean,
  colorMode: boolean,
  imprint: boolean,
  plants: IPlant[],
  action: Action,
}

class Plantala extends Component {
  state: IPlantalaState = {
    isPlaying: false,
    sound: 'STOPPED',
    colorMode: true,
    imprint: false,
    plants: plantItems.map(plant => ({...plant, selected: false, order: 0})),
    action: Action.Start
  }

  setStart = () => {
    this.setState({action: Action.Start});
  }

  setSound = (isPlaying: boolean) => {
    this.setState({isPlaying: !isPlaying, sound: !isPlaying ? 'PLAYING' : 'PAUSED'});
  }

  setColorMode = () => {
    this.setState({colorMode: !this.state.colorMode});
  }

  setImprint = () => {
    this.setState({imprint: true});
  }

  handleImprintClose = () => {
    this.setState({imprint: false});
  }
  
  setAction = () => {
    switch(this.state.action){
      case Action.Start:
        this.setState({action: Action.Select});
        break;
      case Action.Select:
        this.setState({action: Action.Done});
        break;
      case Action.Done:
        this.setState({action: Action.Again});
        break;
      case Action.Again:
        this.resetPlants();
        this.setState({action: Action.Start});
        break;
    }
  }

  resetPlants = () => {
    this.setState({plants: plantItems.map(plant => ({...plant, selected: false, order: 0}))});
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

  render = () => {
    const { isPlaying, sound, colorMode, imprint, plants, action } = this.state;
    const selectedPlants = plants.filter((plant) => (plant.selected === true)).sort((a, b) => a.order  - b.order )
    const activePlant = plants.filter((plant) => (plant.active === true))[0];
    const imageMultiplier = action === Action.Again ? 2 : 1;

    return (
      <div className="plantala">
        <Sound
          url={soundURL}
          loop={true}
          playStatus={sound}
        />
        <Imprint
          open={imprint}
          onClose={this.handleImprintClose}
        />
        <AppContext.Provider value={[colorMode, imageMultiplier]}>
          <Header
            setStart={this.setStart}
            isPlaying={isPlaying}
            setSound={this.setSound}
            setColorMode={this.setColorMode}
            setImprint={this.setImprint}
          />
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
            action={action}
          />
        </AppContext.Provider>
      </div>
    );
  }
}

export default Plantala;
