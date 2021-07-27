import React, { useState } from 'react'

const students = ['d','f','j','y']

function StudentPicker() {
    const [student,setStudent]= useState(null)
    function pick(params) {
        setStudent(students.pop())
    }

    return(
        <div>
        <button onClick={pick}>Pick</button>
        <div>{student}</div>
        </div>
    ) 
}

export default StudentPicker
