const express = require('express')

const StudentMTH = require('../methods/student-methods')

const router = express.Router()

router.post('/student', StudentMTH.createStudent)
router.put('/student/:id', StudentMTH.updateStudent)
router.delete('/student/:id',StudentMTH.deleteStudent)
router.get('/student/:id', StudentMTH.getStudentById)
router.get('/student', StudentMTH.getStudents)

module.exports = router