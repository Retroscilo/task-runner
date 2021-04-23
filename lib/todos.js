export async function findOne(id) {
  const slug = await fetch('https://jsonplaceholder.cypress.io/todos?userId=' + id)
  let res = await slug.json()
  return res
}