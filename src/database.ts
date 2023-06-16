import { User, Product } from './types'

export let users: User[] = [
  {
    id: "01",
    name: "Julio Cesar",
    email: "jcesar@gmail.com",
    password: "123",
    createdAt: new Date().toISOString()
  },
  {
    id: "02",
    name: "Marcos Antonio",
    email: "mantonio@gmail.com",
    password: "123",
    createdAt: new Date().toISOString()
  },
  {
    id: "03",
    name: "Albert Santos Dumont",
    email: "asantosd@gmail.com",
    password: "123",
    createdAt: new Date().toISOString()
  },
]

export const products: Product[] = [
  {
    id: "51",
    name: "Mouse gamer xyz",
    price: 250,
    description: "Melhor mouse",
    imageUrl: "https://picsum.photos/seed/Mouse%20gamer/400"
  },
  {
    id: "52",
    name: "Monitor gamer xyz",
    price: 1250,
    description: "Melhor monitor gamer",
    imageUrl: "https://picsum.photos/seed/Monitor/400"
  },
  {
    id: "53",
    name: "CPU gamer xyz",
    price: 3250,
    description: "Melhor CPU gamer",
    imageUrl: "https://picsum.photos/seed/Monitor/400"
  },
]



