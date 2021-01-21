import React, {useState, useEffect} from 'react'
import RecipePage from './components/RecipePage'

import axios from 'axios'
const baseUrl = 'http://localhost:3001/recipes'


const App = () => {
  const [recipes, setRecipes] = useState([{}])

  useEffect( () =>  {
    const fetchRecipes = async () => {
      const res = await axios.get(baseUrl)
      console.log(res.data,'axios response')
      setRecipes(res.data)
    }
    fetchRecipes()
  },[])

  return (
    <RecipePage recipes={recipes[1]} />
  )
}

export default App;
