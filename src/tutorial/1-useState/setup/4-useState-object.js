import React, { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Manuel',
    age: 30,
    message: 'Learning States React',
  })

  const ChangeMessage = () => {
    setPerson({ ...person, message: 'Have more knowledge than before' })
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={ChangeMessage}>
        Change Message
      </button>
      <button className="btn" onClick={() => setPerson({ ...person, age: 31 })}>
        Change Age
      </button>
    </>
  )
}

export default UseStateObject
