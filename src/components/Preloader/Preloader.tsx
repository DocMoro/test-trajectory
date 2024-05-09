import * as Portal from '@radix-ui/react-portal'

import './Preloader.css'

const Preloader = () => {
  return (
    <Portal.Root className="popup">
      <div className="preloader">
        <div className="preloader__container">
          <span className="preloader__round"></span>
        </div>
      </div>
    </Portal.Root>
  )
}

export default Preloader
