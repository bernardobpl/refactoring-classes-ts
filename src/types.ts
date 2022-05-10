export interface Food {
  id: number
  available: boolean
  description: string
  image: string
  name: string
  price: string
}

export type NewFood = Omit<Food, 'id' | 'available'>