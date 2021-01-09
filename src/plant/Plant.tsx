import React from 'react';
import { Typography } from '@material-ui/core';

export interface IPlant {
  name: string
  order: number
  selected: boolean
  source: string
  link?: string
  wiki?: string
  active?: boolean
  amount?: number
  description?: string
  distance?: number
  rotation?: number
  scale?: number
  size?: number
}

export default function Plant({name}: IPlant) {

  return (
    <div className="plant">
      <Typography variant="h2">
        {name}
      </Typography>
    </div>
  )
}
