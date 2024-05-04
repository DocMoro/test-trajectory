import * as Portal from '@radix-ui/react-portal'
import EditCardForm from './EditCardForm'
import s from './EditCardFormPopup.module.scss'
import { TVehicle } from '../../constants/type'
import { FC, SyntheticEvent, useEffect } from 'react'
import clsx from 'clsx'
import { ESC } from '../../constants/constants'

type EditCardFormPopupProps = {
  stateForPopup: TVehicle
  cbClosePopup: () => void
  cbSubmitForm: (value: TVehicle) => void
}

const EditCardFormPopup: FC<EditCardFormPopupProps> = ({
  stateForPopup,
  cbClosePopup,
  cbSubmitForm
}) => {
  const handleClosePopup = (event: SyntheticEvent) => {
    if (event.currentTarget === event.target) {
      cbClosePopup()
    }
  }

  function handleEscKeydown(e: KeyboardEvent) {
    if (e.key === ESC) {
      cbClosePopup()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEscKeydown)

    return () => {
      document.removeEventListener('keydown', handleEscKeydown)
    }
  }, [])

  return (
    <Portal.Root className={s.popup} onClick={handleClosePopup}>
      <div className={s.dialog}>
        <EditCardForm stateForPopup={stateForPopup} cbSubmitForm={cbSubmitForm} />
        <button
          className={clsx(s.card__button, s.button)}
          onClick={handleClosePopup}
          title="Close form"
          type="button"
        ></button>
      </div>
    </Portal.Root>
  )
}

export default EditCardFormPopup
