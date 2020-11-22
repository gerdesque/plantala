import React from 'react';
import { Typography } from '@material-ui/core';

export interface IPlant {
  active: boolean
  name: string
  source: string
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
