import React, { useEffect, useRef } from 'react'

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refInput = useRef(null)
  const refDiv = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(refInput.current.value)
  }

  useEffect(() => {
    console.log(refDiv.current)
    refInput.current.focus()
  })

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refInput} />
          <button type="submit">submit</button>
        </div>
        <div ref={refDiv}>hello there</div>
      </form>
    </>
  )
}

export default UseRefBasics
