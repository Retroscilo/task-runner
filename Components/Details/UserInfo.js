import React from 'react';
import { DataTable, Card } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';

export default ({ user }) => (
  <Card elevation={0} style={ styles.userCard }>
    <Card.Title
      title={user.name}
      titleStyle={ styles.userCardTitle }
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