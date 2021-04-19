import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { find } from '../lib/user'
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Avatar, Card, IconButton } from 'react-native-paper';

const pagination = (props) => {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'space-between' }}
    >
      {}
    </div>
  )
}

function HomeScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const [ users, setUsers ] = useState(undefined)
  useEffect(() => {
    async function fetchData() {
      const users = await find()
      console.log(users)
      setUsers(users)
    }
    fetchData()
  }, [])
  
  return (
    <View>
      <Searchbar
        placeholder="Chercher un utilisateur"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{ height: 55 }}
      />
      {!users && <ActivityIndicator animating={true} color={Colors.red800} />}
      {users && users.map((user, i) =>
        <Card.Title
          key={i}
          title={user.name}
          titleStyle={{ color: 'black', fontSize: 30, marginTop: 25 }}
          left={(props) => <Avatar.Text {...props} label={user.initials} size= {67} />}
          style={{ border: '1px solid lightgrey', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingLeft: 0, paddingTop: 40, paddingBottom: 40, cursor: 'pointer', background: 'white' }}
        />
      )}
    </View>
  );
}

export default HomeScreen
