import React, { Component, Fragment, } from 'react'
import { Card, Header, Form, Button } from 'semantic-ui-react'

import '../HomeScreen/HomeScreen.css'
import withHttpRequest from '../Hoc/withHttpRequest'
import StudentComponent from '../StudentComponent/StudentComponent'
import NavbarComponent from '../NavbarComponent/NavbarComponent'

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nameInput: '',
      emailInput: '',
      cityInput: '',
      zipcodeInput: '',
      streetInput: '',
      studentsInfo: [],
    }
  }

  componentDidMount() {
    this.getAllStudents()
  }

  getAllStudents = () => {
    this.props.getStudents()
      .then(res => {
        this.setState({ studentsInfo: res.data })
      })  
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  addStudent = (e) => {
    e.preventDefault();

    this.newStudent = {
      email: this.state.emailInput,
      name: this.state.nameInput,
      address: {
        street: this.state.streetInput,
        zipcode: this.state.zipcodeInput,
        city: this.state.cityInput
      }
    }
    this.props.postStudent(this.newStudent);
    this.getAllStudents()
  }

  studentRenderCallback = (dataFromChild) => {
    if(dataFromChild === true){
      this.getAllStudents() 
    }
  }

  render() {
    
    const { studentsInfo, nameInput, emailInput, cityInput, zipcodeInput, streetInput } = this.state;

    return (
      <Fragment>
        <NavbarComponent />
        <div className='container'>
          <div className='studentCards'>
            <Card.Group centered >
              {studentsInfo.map((student, i) => (<StudentComponent callbackFromParent={this.studentRenderCallback} key={i} studentsInfo={studentsInfo[i]} />))}
            </Card.Group>
          </div>

          <div className='form'>
            <Header>New Student</Header>
            <Form onSubmit={this.addStudent}>
              <label>Name</label>
              <Form.Input
                placeholder='Enter Name..'
                type='text'
                name="nameInput"
                value={nameInput}
                onChange={this.handleInputChange}
              />
              <label>Email</label>
              <Form.Input
                placeholder='Enter Email..'
                type='Email'
                name="emailInput"
                value={emailInput}
                onChange={this.handleInputChange}
              />
              <label>Address: City</label>
              <Form.Input
                placeholder='Enter City..'
                type='text'
                name="cityInput"
                value={cityInput}
                onChange={this.handleInputChange}
              />
              <label>Address: Street</label>
              <Form.Input
                placeholder='Enter Street..'
                type='text'
                name="streetInput"
                value={streetInput}
                onChange={this.handleInputChange}
              />
              <label>Address: Zipcode</label>
              <Form.Input
                placeholder='Enter Zipcode..'
                type='text'
                name="zipcodeInput"
                value={zipcodeInput}
                onChange={this.handleInputChange}
              />
              <Button type='submit'>Submit</Button>
            </Form>
          </div>
        </div>
      </Fragment >
    )
  }
}
export default withHttpRequest(HomeScreen);