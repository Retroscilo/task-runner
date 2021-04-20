import React, { useEffect, useState } from 'react';
import { ScrollView, View, Image } from 'react-native';
import { findByAlbumId } from '../lib/photos';
import { ActivityIndicator, Card, Colors, Modal, Portal, Text, Button, Provider } from 'react-native-paper';

export default ({ route }) => {
  const [ photos, setPhotos ] = useState(undefined)
  useEffect(() => {
    async function fetchData () {
      const photos = await findByAlbumId(route.params.albumId)
      setPhotos(photos)
      console.log(photos)
    }
    fetchData()
  }, [])

  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20, alignItems: 'center'};
  const [ modalPic, setModalPic ] = useState(undefined)
  
  if (!photos) return <ActivityIndicator animating={true} color={Colors.red800} />
  return (
    <View>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle} style={{ flex: 1 }}>
          <Image source={{ uri: modalPic }} style={{ width: 600, height: 300 }} />
        </Modal>
      </Portal>
      <Card.Title
        title={route.params.albumTitle}
      />

      {photos.map((photo, i) => (
        <Card onPress={() => { setModalPic(photo.url); showModal() }} key={i}>
          <Card.Cover
            style={{ margin: 10 }}
            source={{ uri: photo.url }}
          />
        </Card>
      ))}
    </View>
  )
}