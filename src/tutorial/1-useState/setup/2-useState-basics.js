import React, { useState } from 'react'

const UseStateBasics = () => {
  // console.log(useState())
  // const value = useState('Hello World')[0]
  // const setValue = useState('Hellos World')[1]
  // console.log(value, setValue)

  const [title, setTitle] = useState('Random Title')

  const handlerClick = () => {
    if (title === 'Random Title') {
      setTitle('Hello People')
    } else {
      setTitle('Random Title')
    }
  }

  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button className="btn" onClick={handlerClick}>
        Change title
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
