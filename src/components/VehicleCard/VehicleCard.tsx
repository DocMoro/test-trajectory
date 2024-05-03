import { FC, useContext } from 'react'

import { TVehicle } from '../../constants/type'
import clsx from 'clsx'

import s from './VehicleCard.module.scss'
import VehiclesContext from '../../store/VehiclesContext'
import { updateDatabase } from '../../utils/updateDatabase'

type VehicleCardProps = {
  vehicle: TVehicle
}

export const VehicleCard: FC<VehicleCardProps> = ({ vehicle }) => {
  const { id, name, model, year, color, price } = vehicle
  const { vehicles, setVehicles } = useContext(VehiclesContext)

  const handleDeleteButton = () => {
    const newVehicles = vehicles.filter((vehicle) => vehicle.id !== id)
    setVehicles(newVehicles)

    updateDatabase(newVehicles)
  }

  return (
    <li className={s.card}>
      <h3 className={s.card__title}>{name}</h3>
      <div className={s.card__textContainer}>
        <h4 className={s.card__subTitle}>Model:</h4>
        <p className={s.card__text}>{model}</p>
      </div>
      <div className={s.card__textContainer}>
        <h4 className={s.card__subTitle}>Year:</h4>
        <p className={s.card__text}>{year}</p>
      </div>
      <div className={s.card__textContainer}>
        <h4 className={s.card__subTitle}>Color:</h4>
        <p className={s.card__text}>{color}</p>
      </div>
      <div className={s.card__textContainer}>
        <h4 className={s.card__subTitle}>Price:</h4>
        <p className={s.card__text}>{price} $</p>
      </div>
      <button
        className={clsx(s.card__button, s.button)}
        onClick={handleDeleteButton}
        title="Remove card"
        type="button"
      ></button>
    </li>
  )
}
