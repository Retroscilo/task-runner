import React, { useEffect, useState, useReducer } from 'react';
import { ScrollView, View, Image } from 'react-native';
import { getComments } from '../lib/comments';
import { ActivityIndicator, Card, Colors, Modal, Portal, Text, Button, Provider, DataTable, Avatar, Divider, TextInput } from 'react-native-paper';

export default ({ route }) => {
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const [ text, setText ] = useState('');
  const [ comments, setComments ] = useState(undefined)
  useEffect(() => {
    async function fetchData() {
      const comments = await getComments(route.params.postId)
      setComments(comments)
      console.log(comments)
    }
    fetchData()
  }, [])

  function handlePress () {
    if (text === '') return
    const newComments = [ { name: 'anonymous', email: 'anon@anon.com', body: text }, ...comments ]
    console.log(newComments)
    setComments([ { name: 'anonymous', email: 'anon@anon.com', body: text }, ...comments ])
    forceUpdate()
  }

  if (!comments) return <ActivityIndicator animating={true} color={Colors.red800} />
  return (
    <>
    <Card style={{ margin: 20 }}>
      <Card.Title title={route.params.postTitle}  titleNumberOfLines={2} />
      <Text style={{ padding: 20 }}>{route.params.postBody}</Text>
    </Card>
    <Card style={{ marginLeft: 20, marginRight: 20, marginTop: 5, marginBottom: 10 }}>
    <Card.Title title={"COMMENTS"} />
    {comments.map((comment, i) => (
      <React.Fragment key={i}>
        <Divider />
        <Card.Title
         title={comment.name}
         titleNumberOfLines={2}
         subtitle={comment.email}
         subtitleStyle={{ marginBottom: 10 }}
         left={(props) => <Avatar.Icon {...props} icon="account" size={30} />}
        />
        <Text style={{ paddingLeft: 20, paddingBottom: 20 }}>{comment.body}</Text>
      </React.Fragment>
      ))}
      <TextInput
        label="Add a comment"
        value={text}
        onChangeText={text => setText(text)}
      />
      <Button onPress={() => handlePress()}>Add a comment</Button>
      </Card>
    </>
  )
}