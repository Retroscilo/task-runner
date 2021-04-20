import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { find } from '../lib/user'
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Avatar, Card, IconButton } from 'react-native-paper';

function UserProvider ({ children }) {
  const [ users, setUsers ] = useState(null)
  useEffect(() => {
    async function fetchData() {
      const res = await find()
      setUsers(res)
    }
    fetchData()
  }, [])

  if (!users) return <ActivityIndicator animating={true} color={Colors.red800} />
  return children(users)
}

function SearchbarProvider ({ children, users }) {
  const [ searchQuery, setSearchQuery ] = useState('');
  const [ displayedUsers, setDisplayedUsers ] = useState(users)

  const onChangeSearch = value => {
    const matchingUsers = users.filter(user => user.name.includes(value))
    setSearchQuery(value)
    setDisplayedUsers(matchingUsers)
  }
  
  return (
    <>
      <Searchbar
        placeholder="Chercher un utilisateur"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{ height: 55 }}
      />
      {children(displayedUsers)}
    </>
  )
}

const PaginationProvider = ({ children, users }) => {
  // display first 5 users
  const [ paginatedUsers, setPaginatedUsers ] = useState(users.filter((user, i) => i < 5))
  // set number of pages
  const [ pages, setPages ] = useState(undefined)

  useEffect(() => {
    // set number of pages in an array / ex: [ 1, 2 ] for 2 pages
    let p = []
    for (let i = 1; i <= Math.floor(users.length / 5); i++) p.push(i)
    setPages(p)
    setPaginatedUsers(users.filter((user, i) => i < 5))
  }, [ users ])

  function handlePageChange (page) {
    let displayedUsers = []
    for(let i = 5*(page-1); i < 5*(page-1)+5; i++) displayedUsers.push(users[i])
    setPaginatedUsers(displayedUsers)
  }

  return (
    <>
      {children(paginatedUsers)}
      <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', height: 30 }}>
        {pages && pages.length > 0 && pages.map(i => (
          <span
            key={i}
            style={{ cursor: 'pointer' }}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </span>))}
      </div>
    </>
  )
}

const UserListWithSearchAndPagination = () => (
  // FAAC Bitch 👌
  <UserProvider>
    {users => (
      <SearchbarProvider users={users} >
        {matchingUsers => (
          <PaginationProvider users={matchingUsers}>
            {paginatedUsers => (
              <>
                {paginatedUsers.map((user, i) => (
                  <Card.Title
                    key={i}
                    title={user.name}
                    titleStyle={{ color: 'black', fontSize: 30, marginTop: 25 }}
                    left={(props) => <Avatar.Text {...props} label={user.initials} size= {67} />}
                    style={{ border: '1px solid lightgrey', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingLeft: 0, paddingTop: 40, paddingBottom: 40, cursor: 'pointer', background: 'white' }}
                  />)
                )}
              </>
            )}
          </PaginationProvider>
        )}
      </SearchbarProvider>
    )}
  </UserProvider>
)

function HomeScreen() {
  return (
    <View>
      <UserListWithSearchAndPagination />
    </View>
  );
}

export default HomeScreen
