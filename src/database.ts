import { User, Product } from './types'

export let users: User[] = [
  {
    id: "01",
    name: "Das Quantas",
    email: "dasquantas@gmail.com",
    password: "123",
    createdAt: new Date().toISOString()
  },
  {
    id: "03",
    name: "Trolinda",
    email: "trolinda@gmail.com",
    password: "123",
    createdAt: new Date().toISOString()
  },
]

export const products: Product[] = [
  {
    id: "51",
    name: "Mouse gamer xyz",
    price: 250,
    description: "Melhor mouse do mercado livre",
    imageUrl: "https://picsum.photos/seed/Mouse%20gamer/400"
  },
  {
    id: "52",
    name: "Monitor gamer xyz",
    price: 1250,
    description: "Melhor monitor gamer do mercado livre",
    imageUrl: "https://picsum.photos/seed/Monitor/400"
  },
]



