import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { findOne } from '../lib/user';
import { findOne as getTodos } from '../lib/todos'
import { ActivityIndicator, Colors } from 'react-native-paper';
// Components
import { Todos, Map, UserInfos, Albums, Posts } from '../Components/Details/index'

const UserProvider = ({ children, id }) => {
  const [ user, setUser ] = useState(undefined)
  useEffect(() => {
    async function fetchData() {
      const res = await findOne(id)
      const todos = await getTodos(id)
      setUser({ ...res, todos })
    }
    fetchData()
  }, [])

  if (!user) return <ActivityIndicator animating={true} color={Colors.red800} />
  return children(user)
}

export default ({ route, navigation }) => (
  <UserProvider id={route.params.id}>
    {user => (
      <ScrollView>
        <UserInfos user={user} />
        <Map />
        <Todos todos={user.todos} />
        <Albums userId={user.id} navigation={navigation} />
        <Posts userId={user.id} navigation={navigation} />
      </ScrollView>
    )}
  </UserProvider>
);
