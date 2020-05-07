import React, { Fragment } from 'react'
import { Card, Button } from 'semantic-ui-react'

import withHttpRequest from '../Hoc/withHttpRequest'

function StudentComponent(props) {

  const deleteStudent = () => {
    deleteStudentHOC(studentsInfo._id)
    callbackFromParent(true);
  }

  const { studentsInfo, callbackFromParent, deleteStudentHOC } = props;

  return (
    <Fragment>
      <Card>
        <Card.Content >
          <Card.Header textAlign='center' >{studentsInfo.name}</Card.Header>
        </Card.Content>
        <Card.Content>Email: {studentsInfo.email}</Card.Content>
        <Card.Content> Address</Card.Content>
        <Card.Content>City: {studentsInfo.address.city}</Card.Content>
        <Card.Content>Street: {studentsInfo.address.street}</Card.Content>
        <Card.Content>zipcode: {studentsInfo.address.zipcode}</Card.Content>
        <Button onClick={deleteStudent}>Delete</Button>
      </Card>
    </Fragment>
  )
}
export default withHttpRequest(StudentComponent);
