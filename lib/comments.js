export async function getComments (postId) {
  const slug = await fetch('https://jsonplaceholder.typicode.com/comments?postId=' + postId)
  const comments = await slug.json()
  return comments
}