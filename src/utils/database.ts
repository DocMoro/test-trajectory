import { LOCAL_KEY_VEHICLE } from '../constants/constants'
import { TVehicle } from '../constants/type'

export function updateDatabase(newVehicles: TVehicle[]) {
  const strJson = JSON.stringify(newVehicles)
  localStorage.setItem(LOCAL_KEY_VEHICLE, strJson)
}

export function getLocalData(key: string) {
  const localData = localStorage.getItem(key)
  if (localData) {
    return JSON.parse(localData)
  }
  return null
}
