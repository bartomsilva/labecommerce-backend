import { User, Product } from '../interfaces'

export let users: User[] = [
  {
    id: "01",
    name: "Santos Dumont",
    email: "sdumont@gmail.com",
    password: "123456@aA",
    createdAt: new Date().toISOString()
  },
  {
    id: "02",
    name: "Julio Cesar",
    email: "jcesar@gmail.com",
    password: "123456@aA",
    createdAt: new Date().toISOString()
  },
  {
    id: "03",
    name: " Isabel Cristina Leopoldina",
    email: "pisabel@gmail.com",
    password: "123456@aA",
    createdAt: new Date().toISOString()
  }  
]

export const products: Product[] = [
  {
    id: "51",
    name: "Mouse gamer xyz",
    price: 250,
    description: "Melhor mouse gamer do Brasil",
    imageUrl: "https://picsum.photos/seed/Mouse%20gamer/400"
  },
  {
    id: "52",
    name: "Monitor gamer xyz",
    price: 1250,
    description: "Melhor monitor gamer do Brasil",
    imageUrl: "https://picsum.photos/seed/Monitor/400"
  },
  {
    id: "53",
    name: "CPU gamer xyz",
    price: 4550,
    description: "Melhor CPU gamer do Brasil",
    imageUrl: "https://picsum.photos/seed/CPU/400"
  }
]



