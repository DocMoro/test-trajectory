import { FC, SyntheticEvent } from 'react'
import clsx from 'clsx'

import s from './CloseButton.module.scss'

type CloseButtonProps = {
  handleClose: (event: SyntheticEvent<HTMLButtonElement>) => void
  title: string
}

const CloseButton: FC<CloseButtonProps> = ({ handleClose, title }) => (
  <button
    className={clsx(s.card__button, s.button)}
    onClick={handleClose}
    title={title}
    type="button"
  ></button>
)

export default CloseButton
