export async function getComments (postId) {
  const slug = await fetch('https://jsonplaceholder.cypress.io/comments?postId=' + postId)
  const comments = await slug.json()
  return comments
}