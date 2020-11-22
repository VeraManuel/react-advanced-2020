import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)
  // const firstValue = text || 'hello world' // if text is falsy will return hello world
  // const secondValue = text && 'hello world' // if text is true will return hello world else will return nothing
  // // console.log(secondValue)

  return (
    <>
      <h1>{text || 'Jhon Doe'}</h1>
      <h1>{text && 'hello world'}</h1>
      <h1>{!text && 'hello people'}</h1>
      {isError && <h1>Error....</h1>}
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {isError ? <p>There is an Error....</p> : <h1>There is no Error...</h1>}
      {/* ternary operator */}
    </>
  )
}

export default ShortCircuit
