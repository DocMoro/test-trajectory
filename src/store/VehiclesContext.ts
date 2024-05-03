import { createContext } from 'react'
import { TVehicle } from '../constants/type'

type TVehiclesContext = {
  vehicles: TVehicle[]
  setVehicles: (vichles: TVehicle[]) => void
}

const VehiclesContext = createContext<TVehiclesContext>({
  vehicles: [],
  setVehicles: () => []
})
export default VehiclesContext
