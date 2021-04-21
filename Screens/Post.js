import React, { useEffect, useState } from 'react';
import { ScrollView, View, Image } from 'react-native';
import { getComments } from '../lib/comments';
import { ActivityIndicator, Card, Colors, Modal, Portal, Text, Button, Provider, DataTable, Avatar, Divider } from 'react-native-paper';

export default ({ route }) => {
  const [ comments, setComments ] = useState(undefined)
  useEffect(() => {
    async function fetchData() {
      const comments = await getComments(route.params.postId)
      setComments(comments)
      console.log(comments)
    }
    fetchData()
  }, [])
  if (!comments) return <ActivityIndicator animating={true} color={Colors.red800} />
  return (
    <>
    <Card style={{ margin: 20 }}>
      <Card.Title title={route.params.postTitle}  titleNumberOfLines={2} />
      <Text style={{ padding: 20 }}>{route.params.postBody}</Text>
    </Card>
    {comments.map((comment, i) => (
       <Card key={i} style={{ marginLeft: 20, marginRight: 20, marginTop: 5, marginBottom: 10, paddingBottom: 20 }}>
         <Divider />
         <Card.Title
          title={comment.name}
          titleNumberOfLines={2}
          subtitle={comment.email}
          subtitleStyle={{ marginBottom: 10 }}
          left={(props) => <Avatar.Icon {...props} icon="account" size={30} />}
         />
         <Text style={{ paddingLeft: 20 }}>{comment.body}</Text>
       </Card>
      ))}
    </>
  )
}