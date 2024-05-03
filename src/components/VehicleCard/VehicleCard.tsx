import { FC } from 'react'

import { TVehicleCard } from '../../constants/type'
import clsx from 'clsx'

import s from './VehicleCard.module.scss'

type VehicleCardProps = {
  vehicle: TVehicleCard
}

export const VehicleCard: FC<VehicleCardProps> = ({ vehicle }) => {
  const { name, model, year, color, price, isFavorite } = vehicle

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
          isFavorite ? s.card__button_icon_plus : s.card__button_icon_cross,
          s.card__button,
          s.button
        )}
        onClick={() => console.log('ll')}
        title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        type={'button'}
      ></button>
    </li>
  )
}
