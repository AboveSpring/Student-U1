import React, { Component } from 'react';

export default function withHttpRequests(WrappedComponent) {
  return class extends Component {

    getStudents = async () => {
      const url = "http://localhost:8000/student";
      return fetch(url)
        .then(res => res.json())
    }

    postStudent = async (newStudent) => {
      const url = "http://localhost:8000/student";
      fetch((url), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newStudent),
      })
      this.getStudents()
    }

    deleteStudent = async (id) => {
      const url = `http://localhost:8000/student/${id}`;
      fetch((url), {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      this.getStudents()
    }

    render() {
      return (
        <WrappedComponent
          deleteStudentHOC={this.deleteStudent}
          getStudents={this.getStudents}
          postStudent={this.postStudent}
          {...this.props}
        />
      )
    }
  }
}