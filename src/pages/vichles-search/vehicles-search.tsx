import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { TVehicle } from '../../constants/type'
import { API_PATH, LOCAL_KEY_VEHICLE, sortingDropdownData } from '../../constants/constants'
import { getLocalData, updateDatabase } from '../../utils/database'
import VehiclesSearchContainer from './vehicles-search-container'

const VichlesSearch: FC = () => {
  const [vehicles, setVehicles] = useState<TVehicle[]>([])
  const [sortState, setSortState] = useState<string>(sortingDropdownData[0])

  const getVichles = async () => {
    try {
      const localData = getLocalData(LOCAL_KEY_VEHICLE)
      let data

      if (localData) {
        data = localData
      } else {
        const res = await fetch(API_PATH)
        data = await res.json()
      }
      setVehicles(data)
    } catch (err) {
      console.log(err)
    }
  }

  const cbCrossButton = useCallback(
    (id: number) => {
      const newVehicles = vehicles.filter((vehicle) => vehicle.id !== id)
      setVehicles(newVehicles)

      updateDatabase(newVehicles)
    },
    [vehicles]
  )

  const sortingVehicles = useMemo(() => {
    const arr = [...vehicles]

    switch (sortState) {
      case sortingDropdownData[1]:
        return arr.sort((a, b) => b.price - a.price)
      case sortingDropdownData[2]:
        return arr.sort((a, b) => b.year - a.year)
    }
    return arr
  }, [vehicles, sortState])

  useEffect(() => {
    getVichles()
  }, [])

  return (
    <VehiclesSearchContainer
      vehicles={vehicles}
      setVehicles={setVehicles}
      sortState={sortState}
      setSortState={setSortState}
      sortingVehicles={sortingVehicles}
      cbCrossButton={cbCrossButton}
    />
  )
}

export default VichlesSearch
