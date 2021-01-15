import React, {Fragment} from 'react';
import { IconButton, Typography } from '@material-ui/core';
import MapIcon from '@material-ui/icons/Map';
import StyleIcon from '@material-ui/icons/Style';
import InfoIcon from '@material-ui/icons/Info';

interface IDescriptionProps {
  description: string
}

export default function Description({ description }: IDescriptionProps) {

  const descriptionParts = description.split('; ');

  return (
    <Fragment>
      <IconButton aria-label="style" disabled>
        <StyleIcon />
      </IconButton>
      <Typography>
        {descriptionParts[0]}
      </Typography>
      <IconButton aria-label="map" disabled>
        <MapIcon />
      </IconButton>
      <Typography>
        {descriptionParts[1]}
      </Typography>
      <IconButton aria-label="info" disabled>
        <InfoIcon />
      </IconButton>
      <Typography>
        {descriptionParts[2]}
      </Typography>
    </Fragment>
  );
}
