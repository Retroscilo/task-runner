import React, { useEffect, useState, useReducer } from 'react';
import {StyleSheet, Text, View } from 'react-native';
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
    <Card style={ styles.userCard}>
      <Card.Title title={"Albums"} titleStyle={ styles.colorWhite}/>
      {albums.map((album, i) => {
        if (!displayAll && i >= 5) return
        return (
        <Card 
          key={i}
          onPress={() => navigation.navigate('Album', { albumId: album.id, albumTitle: album.title })}
          style={ styles.userCard}
        >
          <Card.Cover source={{ uri: album.photos[0].url }} />
          <Card.Title title={album.title} titleStyle={{ fontSize: 18, fontWeight: 'regular' }} />
        </Card>
      )})}
      <Button onPress={() => setDisplayAll(!displayAll)}>{displayAll ? 'Hide' : 'Show all albums' }</Button>
    </Card>
  )
}

const styles = StyleSheet.create({
  userCard: {
    boxShadow: '10px 10px 5px rgba(0, 0, 255, .5)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'center',
    padding: 30,
    paddingBottom: 0,
    cursor: 'pointer',
    backgroundColor: 'rgba(0, 0, 255, .4)',
    margin: 20,
    borderRadius: 30,
  },

  userCardTitle: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },

  colorWhite: {
    color: 'white',
  }
})