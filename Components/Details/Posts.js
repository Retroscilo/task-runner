
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Image } from 'react-native';
import { getPosts } from '../../lib/posts';
import { ActivityIndicator, Card, Colors, Modal, Portal, Text, Button, Provider, DataTable, Divider } from 'react-native-paper';

export default ({ userId, navigation }) => {
   const [ posts, setPosts ] = useState(undefined)
   useEffect(() => {
     async function fetchData() {
      const res = await getPosts(userId)
      setPosts(res)
      console.log(res)
     }
     fetchData()
   }, [])

   if (!posts) return <ActivityIndicator animating={true} color={Colors.red800} />
   return (
     <Card style={{ margin: 20 }}>
      <Card.Title title={"POSTS"}/>
      {posts.map((post, i) => (
        <Card key={i} onPress={() => navigation.navigate('Post', { postId: post.id, postTitle: post.title, postBody: post.body })}>
          <Card.Title title={post.title}></Card.Title>
          <Divider />
        </Card>
        ))}
     </Card>
   )
}