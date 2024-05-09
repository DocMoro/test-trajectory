import { FC } from 'react'

import SortingDropdown from '../../components/SortingDropdown/SortingDropdown'
import { VehiclesList } from '../../components/VehiclesList'
import EditCardFormPopup from '../../components/EditCardForm/EditCardFormPopup'
import Preloader from '../../components/Preloader/Preloader'
import usePopup from '../../hooks/use-popup'

import { TVehicle } from '../../constants/type'

import s from './vehicles-search.module.scss'

type VehiclesSearchContainerProps = {
  isLoading: boolean
  vehicles: TVehicle[]
  setVehicles: (arr: TVehicle[]) => void
  sortState: string
  setSortState: (str: string) => void
  sortingVehicles: TVehicle[]
  cbDeleteCard: (id: number) => void
}

const VehiclesSearchContainer: FC<VehiclesSearchContainerProps> = ({
  isLoading,
  vehicles,
  setVehicles,
  sortState,
  setSortState,
  sortingVehicles,
  cbDeleteCard
}) => {
  const { stateForPopup, cbSubmitForm, cbCallPopup, cbClosePopup } = usePopup(vehicles, setVehicles)
  return (
    <section className={s.section}>
      <SortingDropdown sortState={sortState} setSortState={setSortState} className={s.dropdown} />
      <VehiclesList
        vehicles={sortingVehicles}
        cbCallPopup={cbCallPopup}
        cbDeleteCard={cbDeleteCard}
      />
      {stateForPopup && (
        <EditCardFormPopup
          stateForPopup={stateForPopup}
          cbClosePopup={cbClosePopup}
          cbSubmitForm={cbSubmitForm}
        />
      )}
      {isLoading && <Preloader />}
    </section>
  )
}

export default VehiclesSearchContainer
