import { FC, useEffect, useState } from 'react'
import { VehiclesList } from '../../components/VehiclesList'
import { TVehicle } from '../../constants/type'
import { API_PATH, LOCAL_KEY_VEHICLE } from '../../constants/constants'
import VehiclesContext from '../../store/VehiclesContext'

const VichlesSearch: FC = () => {
  const [vehicles, setVehicles] = useState<TVehicle[]>([])

  const getVichles = async () => {
    try {
      const localData = localStorage.getItem(LOCAL_KEY_VEHICLE)
      let data

      if (localData) {
        data = JSON.parse(localData)
      } else {
        const res = await fetch(API_PATH)
        data = await res.json()
      }
      console.log(data)
      setVehicles(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getVichles()
  }, [])

  return (
    <VehiclesContext.Provider value={{ vehicles, setVehicles }}>
      <VehiclesList vehicles={vehicles} />
    </VehiclesContext.Provider>
  )
}

export default VichlesSearch
