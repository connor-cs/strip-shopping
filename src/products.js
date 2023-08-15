export const products = [
  {
    id: "1",
    name: "coffee",
    price: "4"
  },
  {
    id: "2",
    name: "book",
    price: "20"
  },
  {
    id: "3",
    name: "cat",
    price: "50"
  },
  {
    id: "4",
    name: "car",
    price: "20000"
  },
]

export function getProductData(id) {
  let data = products.find((prod)=>prod.id === id)
  return data
}