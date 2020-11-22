import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log('call useEffect')
    if (value > 0) {
      document.title = `New Messages(${value})`
    } else {
      document.title = 'Welcome to React tutorial'
    }
  }, [value]) // second parameter run use effect every time value is update

  useEffect(() => {
    console.log('Hello World')
  }, []) // empty array mean only runs on the 1st render

  console.log('render apps')
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click me
      </button>
      <button className="btn" onClick={() => setValue(0)}>
        Reset
      </button>
    </>
  )
}

export default UseEffectBasics
