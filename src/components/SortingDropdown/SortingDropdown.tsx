import { FC } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ChevronDownIcon, DotFilledIcon } from '@radix-ui/react-icons'
import './SortingDropdown.css'
import clsx from 'clsx'
import { sortingDropdownData } from '../../constants/constants'

type SortingDropdownProps = {
  setSortState: (value: string) => void
  sortState: string
  className?: string
}

const SortingDropdown: FC<SortingDropdownProps> = ({ sortState, className, setSortState }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className={clsx(className && className, 'IconButton')}
          aria-label="Customise options"
        >
          <span>{sortState}</span>
          <ChevronDownIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5} align={'start'}>
          <DropdownMenu.RadioGroup value={sortState} onValueChange={setSortState}>
            {sortingDropdownData.map((data, index) => (
              <DropdownMenu.RadioItem className="DropdownMenuRadioItem" value={data} key={index}>
                <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                  <DotFilledIcon />
                </DropdownMenu.ItemIndicator>
                {data}
              </DropdownMenu.RadioItem>
            ))}
          </DropdownMenu.RadioGroup>

          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default SortingDropdown
