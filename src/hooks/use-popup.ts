import { useCallback, useState } from 'react'
import { TVehicle } from '../constants/type'
import { updateDatabase } from '../utils/database'

const usePopup = (vehicles: TVehicle[], setVehicles: (arr: TVehicle[]) => void) => {
  const [stateForPopup, setStateForPopup] = useState<TVehicle | null>(null)

  const cbClosePopup = useCallback(() => {
    setStateForPopup(null)
  }, [])

  const cbSubmitForm = useCallback(
    (value: TVehicle) => {
      const newVehicles = vehicles.map((el) => (el.id === value.id ? value : el))
      setVehicles(newVehicles)

      updateDatabase(newVehicles)
      cbClosePopup()
    },
    [vehicles]
  )

  const cbCallPopup = useCallback((vehicle: TVehicle) => {
    setStateForPopup(vehicle)
  }, [])

  return { stateForPopup, cbSubmitForm, cbCallPopup, cbClosePopup }
}

export default usePopup
