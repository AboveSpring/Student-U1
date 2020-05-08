const Student = require('../models/student-model')

createStudent = (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide all student info',
    })
  }

  const student = new Student(body)
  student
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: student._id,
        message: 'created!',
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'not created!',
      })
    })
}

updateStudent = (req, res) => {
  const body = req.body

  Student.updateOne({ _id: req.params.id },
    {
      email: body.email,
      name: body.name,
      address: {
        street: body.address.street,
        zipcode: body.address.zipcode,
        city: body.address.city
      }
    }, {
    new: true,
    upsert: true,
    runvalidators: true,
  }).then((status) => {
    if (status.upserted)
      res.status(201)
    else if (status.nModified)
      res.status(200).json({
        success: true,
        id: req.params.id,
        message: 'Student updated!',
      })
    else
      res.status(204)
    res.send()
  }).catch(error => {
    return res.status(404).json({
      error,
      message: 'Student not found!',
    })
  })
}


deleteStudent = async (req, res) => {
  await Student.findOneAndDelete({ _id: req.params.id }, (err, student) => {
    if (err) {
      return res.status(204).json({ success: false, error: err })
    }

    if (!student) {
      return res
        .status(404)
        .json({ success: false, error: `Student not found` })
    }
    return res.status(200).json({ success: true, data: student })
  }).catch(err => console.log(err))
}

getStudentById = async (req, res) => {
  await Student.findOne({ _id: req.params.id }, (err, student) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }

    if (!student) {
      return res
        .status(404)
        .json({ success: false, error: `Student not found` })
    }
    return res.status(200).json({ success: true, data: student })
  }).catch(err => console.log(err))
}

getStudents = (req, res) => {
  var query;
  if (req.query.name) {
    query = Student.findOne({ name: req.query.name })
  }
  else {
    query = Student.find()
  }
  query.exec().then((student) => {
    return res.status(200).json({ success: true, data: student })
  }).catch((err) => console.log(err));

}

module.exports = {
  createStudent,
  updateStudent,
  deleteStudent,
  getStudents,
  getStudentById,
}