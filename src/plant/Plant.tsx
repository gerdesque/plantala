import React from 'react';
import { Typography } from '@material-ui/core';

export interface IPlant {
  name: string
  source: string
  description?: string
}

export default function Plant({name, source, description}: IPlant) {

  return (
    <div className="plant">
      <Typography variant="h2">
        {name}
      </Typography>
    </div>
  )
}
