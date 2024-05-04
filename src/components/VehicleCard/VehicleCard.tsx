import { FC } from 'react'

import { TVehicle } from '../../constants/type'
import clsx from 'clsx'

import s from './VehicleCard.module.scss'

type VehicleCardProps = {
  vehicle: TVehicle
  cbCrossButton: (id: number) => void
  cbCallPopup: (vehicle: TVehicle) => void
}

export const VehicleCard: FC<VehicleCardProps> = ({ vehicle, cbCrossButton, cbCallPopup }) => {
  const { id, name, model, year, color, price } = vehicle

  const handleCrossButton = () => {
    cbCrossButton(id)
  }

  const handleCallPopup = () => {
    cbCallPopup(vehicle)
  }

  return (
    <li className={s.card} onClick={handleCallPopup}>
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
        onClick={handleCrossButton}
        title="Remove card"
        type="button"
      ></button>
    </li>
  )
}
