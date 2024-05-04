import { FC, SyntheticEvent, useCallback } from 'react'

import { TVehicle } from '../../constants/type'

import s from './VehicleCard.module.scss'
import CloseButton from '../CloseButton/CloseButton'

type VehicleCardProps = {
  vehicle: TVehicle
  cbDeleteCard: (id: number) => void
  cbCallPopup: (vehicle: TVehicle) => void
}

export const VehicleCard: FC<VehicleCardProps> = ({ vehicle, cbDeleteCard, cbCallPopup }) => {
  const { id, name, model, year, color, price } = vehicle

  const handleDeleteCard = useCallback(
    (event: SyntheticEvent<HTMLButtonElement>) => {
      if (event.currentTarget === event.target) {
        cbDeleteCard(id)
      }
      event.stopPropagation()
    },
    [cbDeleteCard]
  )

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
      <CloseButton title="Remove card" handleClose={handleDeleteCard} />
    </li>
  )
}
