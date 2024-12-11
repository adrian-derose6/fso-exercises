import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  console.log(persons)

  const addPerson = (event) => {
    event.preventDefault()
    console.log('form submitted: ', newName);
    if (newName === '') return alert('Name field is empty!')

    const doesNameExist = persons.some((person) => {
        return person.name === newName;
    })

    if (doesNameExist) {
      return alert(`${newName} is already added to phonebook`);
    }
    
    const personObject = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input type='text' value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input type='text' value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
        <div><p>debug name: {newName}</p></div>
        <div><p>debug number: {newNumber}</p></div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map(person => {
          return <p key={person.name}>{person.name}</p>
        })
      }
    </div>
  )
}

export default App
