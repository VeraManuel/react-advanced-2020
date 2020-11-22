import React, { useState } from 'react'

const UseStateCounter = () => {
  const [value, setValue] = useState(0)

  const resetValue = () => {
    setValue(0)
  }

  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1)
      // Functional update form
      setValue((prevState) => {
        return prevState + 1
      })
    }, 2000)
  }

  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>Regular counter</h2>
        <h3>{value}</h3>
        <button className="btn" onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className="btn" onClick={resetValue}>
          reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          increase
        </button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h2>Complex counter</h2>
        <h3>{value}</h3>
        <button className="btn" onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  )
}

export default UseStateCounter
