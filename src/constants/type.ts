interface TVehicle {
  id: number
  name: string
  model: string
  year: number
  color: string
  price: number
  latitude: number
  longitude: number
}

interface TVehicleCard extends TVehicle {
  isFavorite: boolean
}

export type { TVehicle, TVehicleCard }
