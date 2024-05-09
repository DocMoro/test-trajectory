import { FC, SyntheticEvent, useCallback, useEffect } from 'react'

import * as Portal from '@radix-ui/react-portal'
import EditCardForm from './EditCardForm'
import CloseButton from '../CloseButton/CloseButton'

import { TVehicle } from '../../constants/type'
import { ESC } from '../../constants/constants'

import s from './EditCardFormPopup.module.scss'

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
  const handleClosePopup = useCallback(
    (event: SyntheticEvent) => {
      if (event.currentTarget === event.target) {
        cbClosePopup()
      }
    },
    [cbClosePopup]
  )

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
    <Portal.Root className="popup" onClick={handleClosePopup}>
      <div className={s.dialog}>
        <EditCardForm stateForPopup={stateForPopup} cbSubmitForm={cbSubmitForm} />
        <CloseButton title="Close form" handleClose={handleClosePopup} />
      </div>
    </Portal.Root>
  )
}

export default EditCardFormPopup
