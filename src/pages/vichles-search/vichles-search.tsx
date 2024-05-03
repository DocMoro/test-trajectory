import { FC, useEffect, useState } from 'react'
import { VehiclesList } from '../../components/VehiclesList'
import { TVehicle, TVehicleCard } from '../../constants/type'
import { API_PATH, LOCAL_KEY_SAVED } from '../../constants/constants'

const VichlesSearch: FC = () => {
  const [vichles, setVichles] = useState<TVehicleCard[]>([])

  const getVichles = async () => {
    try {
      const res = await fetch(API_PATH)
      const data = await res.json()

      const savedVichles = localStorage.getItem(LOCAL_KEY_SAVED)
      let savedIds

      if (savedVichles) {
        savedIds = JSON.parse(savedVichles)
      } else {
        savedIds = {}
        localStorage.setItem(LOCAL_KEY_SAVED, JSON.stringify(savedIds))
      }
      const dataWithStateFavovite = data.map((vehicleData: TVehicle): TVehicleCard => {
        return {
          ...vehicleData,
          isFavorite: savedIds[vehicleData.id]
        }
      })
      setVichles(dataWithStateFavovite)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getVichles()
  }, [])
  return <VehiclesList vehicles={vichles} />
}

export default VichlesSearch
