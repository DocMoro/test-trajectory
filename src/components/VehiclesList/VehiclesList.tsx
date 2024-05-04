import { FC } from 'react'

import clsx from 'clsx'

import s from './VehiclesList.module.scss'

import { VehicleCard } from '../VehicleCard'
import { TVehicle } from '../../constants/type'

type VehiclesListProps = {
  vehicles: TVehicle[]
  cbCrossButton: (id: number) => void
  className?: string
}

export const VehiclesList: FC<VehiclesListProps> = ({ vehicles, cbCrossButton, className }) => {
  return (
    <ul className={clsx(s.list, className)}>
      {vehicles.map((vehicle) => (
        <VehicleCard vehicle={vehicle} cbCrossButton={cbCrossButton} key={vehicle.id} />
      ))}
    </ul>
  )
}
