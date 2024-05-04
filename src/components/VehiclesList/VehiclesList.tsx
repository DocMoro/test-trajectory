import { FC } from 'react'

import clsx from 'clsx'

import s from './VehiclesList.module.scss'

import { VehicleCard } from '../VehicleCard'
import { TVehicle } from '../../constants/type'

type VehiclesListProps = {
  vehicles: TVehicle[]
  cbDeleteCard: (id: number) => void
  cbCallPopup: (vehicle: TVehicle) => void
  className?: string
}

export const VehiclesList: FC<VehiclesListProps> = ({
  vehicles,
  cbCallPopup,
  cbDeleteCard,
  className
}) => {
  return (
    <ul className={clsx(s.list, className)}>
      {vehicles.map((vehicle) => (
        <VehicleCard
          vehicle={vehicle}
          cbDeleteCard={cbDeleteCard}
          cbCallPopup={cbCallPopup}
          key={vehicle.id}
        />
      ))}
    </ul>
  )
}
