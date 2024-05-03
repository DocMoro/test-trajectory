import { FC } from 'react'

import clsx from 'clsx'

import s from './VehiclesList.module.scss'

import { VehicleCard } from '../VehicleCard'
import { TVehicleCard } from '../../constants/type'

type VehiclesListProps = {
  vehicles: TVehicleCard[]
  className?: string
}

export const VehiclesList: FC<VehiclesListProps> = ({ vehicles, className }) => {
  return (
    <ul className={clsx(s.list, className)}>
      {vehicles.map((vehicle) => (
        <VehicleCard vehicle={vehicle} key={vehicle.id} />
      ))}
    </ul>
  )
}
