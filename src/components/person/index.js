import React from 'react'

const Person = ({person_props}) => {
  return (
    <div>
        <h2>I am {person_props.name} I am {person_props.age} and I know {person_props.skill}</h2>
    </div>
  )
}

export default Person;