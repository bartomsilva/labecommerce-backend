import { User, Product } from './types'

export const users: User[] = [
  {
    id: "10101010010101",
    name: "Das Quantas",
    email: "dasquantas@gmail.com",
    password: "123",
    createdAt: new Date().toISOString()
  },
  {
    id: "20101010010101",
    name: "Trolinda",
    email: "trolinda@gmail.com",
    password: "123",
    createdAt: new Date().toISOString()
  },
]

export const products: Product[] = [
  {
    id: "2512516256152",
    name: "Mouse gamer xyz",
    price: 250,
    description: "Melhor mouse do mercado livre",
    imageUrl: "https://picsum.photos/seed/Mouse%20gamer/400"
  },
  {
    id: "1512516256152",
    name: "Monitor gamer xyz",
    price: 1250,
    description: "Melhor monitor gamer do mercado livre",
    imageUrl: "https://picsum.photos/seed/Monitor/400"
  },
]



