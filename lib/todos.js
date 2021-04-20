export async function findOne(id) {
  const slug = await fetch('https://jsonplaceholder.typicode.com/todos?userId=' + id)
  let res = await slug.json()
  return res
}