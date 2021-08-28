import React from 'react'

const Employee = (props) => {
  const {firstName, lastName, age} = props
    return (
        <div>
            <h6> {`Employee name: ${firstName} ${lastName}.  Who are age: ${age} `}</h6>
        </div>
    )
} 

export default Employee