export interface User {
  id: string
  name: string
  email: string
  password: string
  created_at: string
}

export interface Product {
  id: string
  name: string
  price: number
  description: string
  image_url: string
}


export interface UpdatePro  {
  id?: string
  name?: string
  price?: number
  description?: string
  image_url?: string
}

export interface PurchaseIn {
  id: string
  buyer: string
  total_price: number
  products: Array<{
    id: string,
    quantity: number
  }>
}

export interface PurchaseDb {
  id: string
  buyer: string
  total_price: number
  created_at: string
}

export interface PurchaseProductsDB {
  purchase_id: string
  product_id: string
  quantity: number,
}
  
export interface Purchase {
  purchaseId: string
  buyerId: string
  buyerName: string
  buyerEmail: string
  totalPrice: number
  createdAt:string
  products:Array<{
    id: string
    name: string
    price: number
    description: string
    imageUrl: string
    quantity: number
  }>
}