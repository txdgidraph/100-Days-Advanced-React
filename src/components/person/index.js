import React from 'react'

const Person = ({x}) => {
  return (
    <div>
        <h2>I am {x.name}. I am {x.age} and I know {x.skill}</h2>
    </div>
  )
}

export default Person;