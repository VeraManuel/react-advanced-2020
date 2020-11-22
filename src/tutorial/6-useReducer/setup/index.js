import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'
// reducer function
import { reducer } from './reducer'

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
}

const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      const addPerson = { id: new Date().getTime().toString(), name }
      dispatch({ type: 'ADD_PERSON', payload: addPerson })
      setName('')
    } else {
      dispatch({ type: 'NO_VALUE' })
    }
  }

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </div>
        <button type="submit">add</button>
      </form>
      {state.people.map((person) => {
        return (
          <h4 key={person.id} className="item">
            {person.name}
            <button
              onClick={() => {
                dispatch({ type: 'REMOVE_ITEM', payload: person.id })
              }}
            >
              remove
            </button>
          </h4>
        )
      })}
    </>
  )
}

export default Index
