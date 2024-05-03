import { FC, useEffect, useState } from 'react'
import { VehiclesList } from '../../components/VehiclesList'
import { TVehicle, TVehicleCard } from '../../constants/type'
import { API_PATH } from '../../constants/constants'

const VichlesSearch: FC = () => {
  const [vichles, setVichles] = useState<TVehicleCard[]>([])

  const getVichles = async () => {
    try {
      const res = await fetch(API_PATH)
      const data = await res.json()
      const dataWithStateFavovite = data.map((vehicleData: TVehicle): TVehicleCard => {
        return {
          ...vehicleData,
          isFavorite: true
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
