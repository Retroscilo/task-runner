export async function find() {
  const slug = await fetch('https://jsonplaceholder.typicode.com/users')
  let res = await slug.json()
  res = res.map(user => {
    const [ firstName, lastName ] = user.name.split(' ')
    return { ...user, initials: firstName[0] + lastName[0] }
  });
  return res
}

export async function findOne(id) {
  const slug = await fetch('https://jsonplaceholder.typicode.com/users/'+id)
  let res = await slug.json()
  const [ firstName, lastName ] = res.name.split(' ')
  return { ...res, initials: firstName[0] + lastName[0] }
}