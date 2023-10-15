export const products = [
  {
    id: "1",
    title: "coffee",
    price: "4"
  },
  {
    id: "2",
    title: "book",
    price: "20"
  },
  {
    id: "3",
    title: "cat",
    price: "50"
  },
  {
    id: "4",
    title: "car",
    price: "20000"
  },
]

export function getProductData(id) {
  let data = products.find((prod)=>prod.id === id)
  return data
}