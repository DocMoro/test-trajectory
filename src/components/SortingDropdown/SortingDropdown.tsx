import React, { FC } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ChevronDownIcon, DotFilledIcon } from '@radix-ui/react-icons'
import './SortingDropdown.css'
import clsx from 'clsx'
import { sortingDropdownData } from '../../constants/constants'

type SortingDropdownProps = {
  className?: string
}

const SortingDropdown: FC<SortingDropdownProps> = ({ className }) => {
  const [person, setPerson] = React.useState(sortingDropdownData[0])

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className={clsx(className && className, 'IconButton')}
          aria-label="Customise options"
        >
          <span>{person}</span>
          <ChevronDownIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5} align={'start'}>
          <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
            {sortingDropdownData.map((data) => (
              <DropdownMenu.RadioItem className="DropdownMenuRadioItem" value={data}>
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
