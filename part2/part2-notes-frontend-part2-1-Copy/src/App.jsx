import { useState, useEffect } from 'react'
import axios from 'axios'
import personsService from './services/persons'

const App = () => {

  const [persons, setPersons] =useState([])
  const [newNumber, setNewNumber] =useState('')
  const [newName, setNewName] =useState('')
  const [showAll, setShowAll] =useState(true)


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

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      setPersons(persons.concat(response.data))
      setNewName('')
      setNewNumber('')
      return
    }
    const personObject = {
      name: newName,
      number: newNumber,
      id: toString(persons.length+1)
    }
    console.log(personObject)
    personsService
    .create(personObject)
    .then(response => {
      console.log(response)
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
