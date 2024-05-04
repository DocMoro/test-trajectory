import { FC, SyntheticEvent } from 'react'
import s from './CloseButton.module.scss'
import clsx from 'clsx'

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
