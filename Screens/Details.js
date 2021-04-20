import React, { useEffect, useState, useReducer } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { findOne } from '../lib/user';
import { findOne as getTodos } from '../lib/todos'
import { ActivityIndicator, Card, Colors } from 'react-native-paper';
import { DataTable } from 'react-native-paper';
import { Modal, Portal, Avatar, IconButton, Switch, Provider, TextInput, Button } from 'react-native-paper';

const UserProvider = ({ children, id }) => {
  const [ user, setUser ] = useState(undefined)
  useEffect(() => {
    async function fetchData() {
      const res = await findOne(id)
      const todos = await getTodos(id)
      setUser({ ...res, todos })
      console.log({ ...res, todos })
    }
    fetchData()
  }, [])

  if (!user) return <ActivityIndicator animating={true} color={Colors.red800} />
  return children(user)
}

const UserDetails = ({ user }) => (
  <Card elevation={2}>
    <Card.Title
      title={user.name}
      titleStyle={{ color: 'black', fontSize: 20, marginTop: 10 }}
      style={{ border: '1px solid lightgrey', paddingBottom: 0, background: 'white' }}
    />
    <DataTable >
      <DataTable.Row>
        <DataTable.Cell>company: </DataTable.Cell>
        <DataTable.Cell>{user.company.name}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Email: </DataTable.Cell>
        <DataTable.Cell>{user.email}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Phone: </DataTable.Cell>
        <DataTable.Cell>{user.phone}</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  </Card>
)

const Map = ({}) => {
  return (
    <Text style={{ height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>Map</Text>
  )
}

const Todos = ({ todos }) => {
  const [ freshTodos, setTodos ] = useState(todos)
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  
  const [ visible, setVisible ] = useState(false)
  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)
  const containerStyle = { backgroundColor: 'white', padding: 20 }
  const [ text, setText ] = useState('')

  const addTodo = () => {
    setTodos([ ...freshTodos, { title: text } ])
    setText('')
    hideModal()
  }

  const switchTodo = id => {
    const i = freshTodos.findIndex(todo => todo.id === id)
    const t = { ...freshTodos[i], completed: !freshTodos[i].completed }
    freshTodos[i] = t
    setTodos(freshTodos)
    forceUpdate()
  }

  return (
    <Card>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>New Todo</Text>
          <TextInput
            onChangeText={text => setText(text)}
            value={text}
          />
          <Button onPress={addTodo}>Add</Button>
        </Modal>
      </Portal>
      <Card.Title
        title="TODOS"
        right={(props) => <IconButton {...props} icon="plus-circle" onPress={showModal} />}
      />
      <DataTable>
        {freshTodos.map((todo, i) => {
          return (
            <DataTable.Row key={i}>
              <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ maxWidth: '80%' }}>{todo.title}</Text>
                <Switch value={todo.completed ? true : false} onValueChange={() => switchTodo(todo.id)} />
              </View>
            </DataTable.Row>
          )
        })}
      </DataTable>
    </Card>
  )
}

export default function DetailsScreen({ route, navigation }) {
  
  return (
    <ScrollView>
      <UserProvider id={route.params.id}>
        {user => (
          <>
            <UserDetails user={user} />
            <Map />
            <Todos todos={user.todos} />
          </>
        )}
      </UserProvider>
    </ScrollView>
  );
}