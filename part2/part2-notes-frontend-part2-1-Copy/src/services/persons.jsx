import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const update = (newObject) => {
  return axios.put(newObject)
}

const deletePerson = (id) => {
    console.log(id)
    console.log(baseUrl+"/"+id)
  return axios.delete(baseUrl+"/"+id)
}

export default { 
  getAll: getAll, 
  create: create, 
  update: update,
  deletePerson: deletePerson
}