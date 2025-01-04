import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)

  }

  const addPerson = (event) => {
    event.preventDefault()
    for (let person of persons) {
      if (person.name === newName) {
        alert(`${newName} is already added to phonebook`)
        setNewName('')
        return
      }}
    console.log('button clicked', event.target)
    const nameObeject = {
      name: newName
    }
    setPersons(persons.concat(nameObeject))
    setNewName('')
    console.log('persons', persons)
    }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange = {handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(persons => 
        <div key={persons.name}>{persons.name}</div>
      )}
    </div>
  )
}

export default App