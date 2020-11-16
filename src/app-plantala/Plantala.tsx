import React, { Component } from 'react';
import Header from '../app-header/Header';
import Main from '../app-main/Main';
import Footer from '../app-footer/Footer';
import './Plantala.css';
import { plants } from '../plants';
import { IPlant } from '../plant/Plant';

export enum ButtonValue {
  Start = "Start",
  Select = "Zur Auswahl hinzufügen",
  Done = "Fertig",
  Again = "Neues Plantala erstellen"
}

export enum HeaderValue {
  Start = "Erstelle dein Mandala!",
  Select = "Wähle bis zu 5 Karten aus",
  Done = "Gestalte dein Plantala",
  Again = "Teile dein Plantala"
}

interface IPlantalaState {
  plants: IPlant[],
  selectedPlants: IPlant[],
  activePlant: IPlant,
  displayedButtonValue: ButtonValue,
  displayedHeaderValue: HeaderValue,
}

class Plantala extends Component {
  state: IPlantalaState = {
    // values to be displayed in <Card />
    plants: plants,
    // plants selected for <AvatarGroup />
    selectedPlants: plants,
    // active plant for <Plant />
    activePlant: {} as IPlant,
    displayedButtonValue: ButtonValue.Start,
    displayedHeaderValue: HeaderValue.Start
  }

  render = () => {
    const { plants, selectedPlants, displayedButtonValue, displayedHeaderValue } = this.state;

    return (
      <div className="plantala">
        <Header />
        <Main
          plants={plants}
          displayedButtonValue={displayedButtonValue}
          displayedHeaderValue={displayedHeaderValue} />
        <Footer
          selectedPlants={selectedPlants} />
      </div>
    );
  }
}

export default Plantala;
