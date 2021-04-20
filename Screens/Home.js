import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { find } from '../lib/user'
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Avatar, Card, IconButton } from 'react-native-paper';

const Pagination = ({ setDisplayedUsers }) => {
  const [ users, setUsers ] = useState(null)
  useEffect(() => {
    async function fetchData() {
      // fetch users
      const res = await find()
      setUsers(res)
    }
    fetchData()
  }, [])

  const [ pages, setPages ] = useState(null)
  useEffect(() => {
    if (!users) return
    // set number of pages in an array / ex: [ 1, 2 ] for 2 pages
    let p = []
    for (let i = 1; i <= Math.floor(users.length / 5); i++) p.push(i)
    setPages(p)
    // display first users
    handlePageChange(1)
  }, [ users ])

  

  function handlePageChange (page, u)  {
    let displayedUsers = []
    for(let i = 5*(page-1); i < 5*(page-1)+5; i++) displayedUsers.push(u || users[i])
    setDisplayedUsers(displayedUsers)
  }

  if (!pages) return <ActivityIndicator animating={true} color={Colors.red800} />
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', height: 30 }}>
      {pages.length > 0 && pages.map(i => {
        return (
        <span
          key={i}
          style={{ cursor: 'pointer' }}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </span>)})}
    </div>
  )
}

function HomeScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const [ displayedUsers, setDisplayedUsers ] = useState(undefined)
  
  return (
    <View>
      <Searchbar
        placeholder="Chercher un utilisateur"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{ height: 55 }}
      />
      {displayedUsers && 
      <span>
        {displayedUsers.map((user, i) => {
          if (i >= 5) return
          return (
          <Card.Title
            key={i}
            title={user.name}
            titleStyle={{ color: 'black', fontSize: 30, marginTop: 25 }}
            left={(props) => <Avatar.Text {...props} label={user.initials} size= {67} />}
            style={{ border: '1px solid lightgrey', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingLeft: 0, paddingTop: 40, paddingBottom: 40, cursor: 'pointer', background: 'white' }}
          />)
        })}
      </span>
      }
      <Pagination setDisplayedUsers={setDisplayedUsers} />
    </View>
  );
}

export default HomeScreen
