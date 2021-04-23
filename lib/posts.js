export async function getPosts (userId) {
  const slug = await fetch('https://jsonplaceholder.cypress.io/posts?userId=' + userId)
  const posts = await slug.json()
  return posts
}