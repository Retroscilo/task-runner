import React from 'react';
import { DataTable, Card } from 'react-native-paper';

export default ({ user }) => (
  <Card elevation={0} style={{ margin: 20 }}>
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