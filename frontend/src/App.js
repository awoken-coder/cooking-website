import React, { useState, useEffect } from 'react'
import RecipePage from './components/RecipePage'
import MainPage from './components/MainPage'
import recipeService from './services/recipes'



const App = () => {
  const [recipes, setRecipes] = useState([{}])
  const [page, setPage] = useState('')

  useEffect(() => {   //Fetches all data when loads
    recipeService
      .getAll()
      .then(res => {
        setRecipes(res)
        console.log('recipes loaded were',res)
      })
      .catch(err => console.log(err))
  }, [])
  const renderSwitch = (page) => {
    switch (page) {
      case ('recipe'):
        return (<RecipePage recipes={recipes[1]} />)
      case ('mainPage'):
        return (<MainPage recipes={recipes}></MainPage>)
      default:
        return (
          <div>
          </div>
        )
    }
  }
  return (
    <div>
      <button onClick={() => setPage('mainPage')}>MainPage</button>
      <button onClick={() => setPage('')}>clear</button>
      <button onClick={() => setPage('recipe')}>recipePage</button>
      {renderSwitch(page)}
    </div>
  )

}

export default App;
