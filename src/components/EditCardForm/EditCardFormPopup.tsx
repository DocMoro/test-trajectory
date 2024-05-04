import * as Portal from '@radix-ui/react-portal'
import EditCardForm from './EditCardForm'
import s from './EditCardFormPopup.module.scss'
import { TVehicle } from '../../constants/type'
import { FC, SyntheticEvent, useCallback, useEffect } from 'react'
import { ESC } from '../../constants/constants'
import CloseButton from '../CloseButton/CloseButton'

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
    <Portal.Root className={s.popup} onClick={handleClosePopup}>
      <div className={s.dialog}>
        <EditCardForm stateForPopup={stateForPopup} cbSubmitForm={cbSubmitForm} />
        <CloseButton title="Close form" handleClose={handleClosePopup} />
      </div>
    </Portal.Root>
  )
}

export default EditCardFormPopup
