import './App.scss'
import { Suspense, lazy } from 'react'
import Preloader from './components/Preloader/Preloader'

const VichlesSearch = lazy(() => import('./pages/vichles-search/vehicles-search'))

function App() {
  return (
    <Suspense fallback={<Preloader />}>
      <VichlesSearch />
    </Suspense>
  )
}

export default App
