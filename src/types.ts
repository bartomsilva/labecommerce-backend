export interface User {
  id:string
  name: string
  email: string
  password: string
  createdAt: string
}

export interface Product {
  id: string
  name: string
  price: number
  description: string
  imageUrl: string
}