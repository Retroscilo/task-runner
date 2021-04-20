import React, { useState, useReducer } from 'react';
import { Text, View } from 'react-native';
import { Modal, Portal, IconButton, Switch, TextInput, Button, DataTable, Card } from 'react-native-paper';

export default ({ todos }) => {
  const [ displayAll, setDisplayAll ] = useState(false)

  const [ freshTodos, setTodos ] = useState(todos)
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  
  const [ visible, setVisible ] = useState(false)
  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)
  const containerStyle = { backgroundColor: 'white', padding: 20 }
  const [ text, setText ] = useState('')

  const addTodo = () => {
    setTodos([ { title: text }, ...freshTodos ])
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
    <Card style={{ margin: 20 }}>
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
          if (!displayAll && i > 5) return
          return (
            <DataTable.Row key={i}>
              <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ maxWidth: '80%' }}>{todo.title}</Text>
                <Switch value={todo.completed ? true : false} onValueChange={() => switchTodo(todo.id)} />
              </View>
            </DataTable.Row>
          )
        })}
        <Button onPress={() => setDisplayAll(!displayAll)}>{!displayAll ? 'Show all' : 'Hide'}</Button>
      </DataTable>
    </Card>
  )
}