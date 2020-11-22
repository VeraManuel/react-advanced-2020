export const reducer = (state, action) => {
  // console.log(state)
  if (action.type === 'ADD_PERSON') {
    const newPerson = [...state.people, action.payload]
    return {
      ...state,
      people: newPerson,
      isModalOpen: true,
      modalContent: 'Person Added',
    }
  }
  if (action.type === 'NO_VALUE') {
    return { ...state, isModalOpen: true, modalContent: 'No value enter' }
  }
  if (action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    )
    return { ...state, people: newPeople }
  }
  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: false }
  }

  throw new Error('action type not found')
}
