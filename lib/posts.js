export async function getPosts (userId) {
  const slug = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
  const posts = await slug.json()
  return posts
}