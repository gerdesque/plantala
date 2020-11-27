import React from 'react';
import { Typography } from '@material-ui/core';

export interface IPlant {
  name: string
  selected: boolean
  source: string
  active?: boolean
  amount?: number
  description?: string
  order ?: number
  rotation?: number
  scale?: number
  size?: number
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
