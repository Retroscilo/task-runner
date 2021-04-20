import React, { useEffect, useState, useReducer } from 'react';
import { Text, View } from 'react-native';
import { Modal, Portal, IconButton, Switch, TextInput, Button, DataTable, Card } from 'react-native-paper';
import { findById } from '../../lib/albums'
import { findByAlbumId } from '../../lib/photos'
import { ActivityIndicator, Colors } from 'react-native-paper';

export default ({ userId, navigation }) => {
  const [ displayAll, setDisplayAll ] = useState(false)
  const [ albums, setAlbums ] = useState(undefined)
  useEffect(() => {
    async function fetchData() {
      const res = await findById(userId)
      setAlbums(res)
      console.log(res)
    }
    fetchData()
  }, [])
  if (!albums) return <ActivityIndicator animating={true} color={Colors.red800} style={{ margin: 10 }} />
  return (
    <Card style={{ margin: 20 }}>
      <Card.Title title={"Albums"} />
      {albums.map((album, i) => {
        if (!displayAll && i >= 5) return
        return (
        <Card 
          key={i}
          onPress={() => navigation.navigate('Album', { albumId: album.id, albumTitle: album.title })}
          style={{ margin: 10 }}
        >
          <Card.Cover source={{ uri: album.photos[0].url }} />
          <Card.Title title={album.title} titleStyle={{ fontSize: 18, fontWeight: 'regular' }} />
        </Card>
      )})}
      <Button onPress={() => setDisplayAll(!displayAll)}>{displayAll ? 'Hide' : 'Show all albums' }</Button>
    </Card>
  )
}