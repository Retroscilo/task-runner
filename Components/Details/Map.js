import React from 'react';
import { Text, Dimensions, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-web-maps';

export default ({ users, init }) => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}  initialRegion={{
        latitude: init ? parseFloat(users[0].address.geo.lat) : -17,
        longitude: init ? parseFloat(users[0].address.geo.lng) : -57,
        latitudeDelta: init ? 10 : 75,
        longitudeDelta: init ? 10 : 75,
      }} >
        {users.map(user => (
          <MapView.Marker
            key= {user.id}
            coordinate={{ 
            latitude: parseFloat(user.address.geo.lat),
            longitude: parseFloat(user.address.geo.lng),
            }}
            image={require('../../assets/marker.png')}
            title={user.name}
          />
        ))}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').height),
    marginLeft: 10,
    marginRight: 10
  },
})