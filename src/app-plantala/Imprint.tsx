import React from 'react';
import { Dialog, DialogContent, DialogContentText, DialogTitle, Link } from '@material-ui/core';

interface IImprintProps {
  open: boolean
  onClose: any
}

export default function Imprint({ open, onClose }: IImprintProps) {

  return (
    <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='responsive-dialog-title'>{'Malen. Strahlen. Plantala!'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Plantala ist eine Webapplikation, bei der du aus ästhetischen Zell- und Pflanzenstrukturen dein eigenes Mandala erstellst. Danach kannst du es teilen, ausdrucken und ausmalen. Plantala verknüpft Informationen über die verfügbaren Pflanzen mit digitaler Kreativität und analoger Entspannung. Damit ist sie die optimale Anti-Burnout-Anwendung für corona-gestresste Großstädter, die auch beim Gedankenloslassen noch etwas dazulernen wollen.
          </DialogContentText>
          <DialogContentText>
            Die Website Plantala wurde von Anne Mühlich und Gerd Müller im Rahmen des Kulturhackathons Coding da Vinci Niedersachsen 2020/2021 entwickelt. 
          </DialogContentText>
          <DialogContentText>
            Der Quellcode läuft unter einer MIT Lizenz. Die von der Universität Göttingen bereitgestellten und bearbeiteten Digitalisate von Botanischen Lehrtafeln wurden unter einer CC BY-SA 4.0 Lizenz veröffentlicht und sind <Link href="https://sammlungen.uni-goettingen.de/sammlung/slg_1053/" target="_blank" rel="noreferrer" > {'hier'} </Link> zu finden.
          </DialogContentText>
          <DialogContentText>
            Der Hintergroundsound unter dem Titel „AUTUMN SUNSET“ stammt von Jason Shaw und läuft unter einer CC-BY-3.0 United States Lizenz auf <Link href="https://freemusicarchive.org/music/Jason_Shaw/Audionautix_Acoustic/AUTUMN_SUNSET_________________1-36" target="_blank" rel="noreferrer" > {'freemusicarchive.org'} </Link>.
          </DialogContentText>
        </DialogContent>
      </Dialog>
  );
}
