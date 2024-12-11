import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  console.log(persons)

  const filteredPersons = filter.length === 0 ? [...persons] : persons.filter(person => {
    const filterName = filter.toLowerCase()
    const personName = person.name.toLowerCase()
    const nameParts = personName.split(' ')
    const doesFilterMatch = personName.startsWith(filterName) || nameParts.some(name => name.startsWith(filter.toLowerCase()))
    return doesFilterMatch
  })

  console.log(filteredPersons)

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

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input type='text' value={filter} onChange={handleFilterChange}/>
      </div>
      <div>
        <h2>add a new person</h2>
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
      </div>
      <h2>Numbers</h2>
      {
        filteredPersons.map(person => {
          return <p key={person.name}>{person.name}</p>
        })
      }
    </div>
  )
}

export default App
