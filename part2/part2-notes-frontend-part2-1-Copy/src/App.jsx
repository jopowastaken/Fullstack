import { useState, useEffect } from 'react'
import axios from 'axios'
import Notification from './services/notification'
import personsService from './services/persons'

const App = () => {

  const [persons, setPersons] =useState([])
  const [newNumber, setNewNumber] =useState('')
  const [newName, setNewName] =useState('')
  const [notificationMessage, setMessage] =useState('')
  const [isErrorMessage, setIsErrorMessage] =useState(false)
  


  useEffect(() =>{
    console.log('RAAAH')
    personsService
    .getAll()
    .then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    })
    }, [])

  const handleNameChange = (event) => {
      setNewName(event.target.value)
      console.log(event.target.value)
  }

  const handleAddPersonError = (event) => {
    setMessage(`'${newName}' is already added to the phonebook'`)
    setIsErrorMessage(true)
    setNewName('')
    setNewNumber('')
  }



  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      console.log('name already exists in the database')
      handleAddPersonError(event)
      return
    }
  
    const personObject = {
      name: newName,
      number: newNumber,
      id: (persons.length +1).toString()
    }
    console.log(personObject)
    personsService
    .create(personObject)
    .then(response => {
      console.log(response)
      setMessage(`Added ${newName}`)
      setIsErrorMessage(false)
      setPersons(persons.concat(response.data))
      setNewName('')
      setNewNumber('')
    })

  }
  const deletePerson = (id) => {
    const person = persons.find(person => person.id === id)
    console.log(person)
    console.log(id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personsService
      .deletePerson(id)
      .then(response => {
        setPersons(persons.filter(person => person.id !== id))
      })
    }
  }
  
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
    console.log(event.target.value)
  }
  
  

 


  return (
    <div>

      <h2>Phonebook</h2>
      <div>
        <Notification message={notificationMessage} isError={isErrorMessage}/>
      </div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange = {handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange = {handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li key={person.name}>{person.name} {person.number}<button onClick={() => deletePerson(person.id)}>delete</button></li>)} 
      </ul>
      
    </div>
  )
}

export default App
