import { FC } from 'react'
import s from './vehicles-search.module.scss'
import SortingDropdown from '../../components/SortingDropdown/SortingDropdown'
import { VehiclesList } from '../../components/VehiclesList'
import EditCardFormPopup from '../../components/EditCardForm/EditCardFormPopup'
import usePopup from '../../hooks/use-popup'
import { TVehicle } from '../../constants/type'

type VehiclesSearchContainerProps = {
  vehicles: TVehicle[]
  setVehicles: (arr: TVehicle[]) => void
  sortState: string
  setSortState: (str: string) => void
  sortingVehicles: TVehicle[]
  cbCrossButton: (id: number) => void
}

const VehiclesSearchContainer: FC<VehiclesSearchContainerProps> = ({
  vehicles,
  setVehicles,
  sortState,
  setSortState,
  sortingVehicles,
  cbCrossButton
}) => {
  const { stateForPopup, cbSubmitForm, cbCallPopup, cbClosePopup } = usePopup(vehicles, setVehicles)
  return (
    <section className={s.section}>
      <SortingDropdown sortState={sortState} setSortState={setSortState} className={s.dropdown} />
      <VehiclesList
        vehicles={sortingVehicles}
        cbCallPopup={cbCallPopup}
        cbCrossButton={cbCrossButton}
      />
      {stateForPopup && (
        <EditCardFormPopup
          stateForPopup={stateForPopup}
          cbClosePopup={cbClosePopup}
          cbSubmitForm={cbSubmitForm}
        />
      )}
    </section>
  )
}

export default VehiclesSearchContainer