import { FC, useState } from 'react'

import { TVehicleCard } from '../../constants/type'
import clsx from 'clsx'

import s from './VehicleCard.module.scss'
import { LOCAL_KEY_SAVED } from '../../constants/constants'

type VehicleCardProps = {
  vehicle: TVehicleCard
}

export const VehicleCard: FC<VehicleCardProps> = ({ vehicle }) => {
  const { id, name, model, year, color, price, isFavorite } = vehicle
  const [buttonState, setButtonState] = useState(isFavorite)

  const handleButton = () => {
    const favoritesData = localStorage.getItem(LOCAL_KEY_SAVED)

    if (favoritesData) {
      const savedVichles = JSON.parse(favoritesData)
      buttonState ? delete savedVichles[id] : (savedVichles[id] = true)
      localStorage.setItem(LOCAL_KEY_SAVED, JSON.stringify(savedVichles))
    }

    setButtonState(!buttonState)
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
        className={clsx(
          buttonState ? s.card__button_icon_cross : s.card__button_icon_plus,
          s.card__button,
          s.button
        )}
        onClick={handleButton}
        title={buttonState ? 'Remove from favorites' : 'Add to favorites'}
        type={'button'}
      ></button>
    </li>
  )
}
