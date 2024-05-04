import * as Portal from '@radix-ui/react-portal'
import EditCardForm from './EditCardForm'
import s from './EditCardFormPopup.module.scss'
import { TVehicle } from '../../constants/type'
import { FC, SyntheticEvent } from 'react'

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
  const handleClousePopup = (event: SyntheticEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      cbClosePopup()
    }
  }

  return (
    <Portal.Root className={s.popup} onClick={handleClousePopup}>
      <div className={s.dialog}>
        <EditCardForm stateForPopup={stateForPopup} cbSubmitForm={cbSubmitForm} />
      </div>
    </Portal.Root>
  )
}

export default EditCardFormPopup
