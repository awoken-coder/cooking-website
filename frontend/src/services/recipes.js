import axios from 'axios'
const baseUrl = 'http://localhost:3001/recipes'

const getAll = () => {
    const res = axios.get(baseUrl)
    return res.then(res => res.data)
}
const add = recipeObject =>   {
    const  res = axios.post(baseUrl, recipeObject)
    console.log(res)
    return res.then(res => res.data)
}
const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}
const recipeService = {
    getAll,
    update,
    add
}
export default recipeService
