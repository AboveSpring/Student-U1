import React, { useState, Fragment } from 'react'
import { Card, Button } from 'semantic-ui-react'

import withHttpRequest from '../Hoc/withHttpRequest'

function StudentComponent(props) {

  const [show, setshow] = useState(true);

  const deleteStudent = () => {
    props.deleteStudent(studentsInfo._id)
    setshow(false)
  }

  const { studentsInfo } = props;
  return (
    <Fragment>
      {show &&
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
        </Card>}
    </Fragment>
  )
}
export default withHttpRequest(StudentComponent);
