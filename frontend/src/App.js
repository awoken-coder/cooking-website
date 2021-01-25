import React, { useState, useEffect } from 'react'
import RecipePage from './components/RecipePage'
import MainPage from './components/MainPage'
import RecipeList from './components/RecipeList'
import recipeService from './services/recipes'



const App = () => {
  const [recipes, setRecipes] = useState([{}])
  const [currentData, setCurrentData] = useState({ page: '', recipes: [] })

  useEffect(() => {   //Fetches all data when loads
    recipeService
      .getAll()
      .then(res => {
        setRecipes(res)
        console.log('recipes loaded were', res)
      })
      .catch(err => console.log(err))
  }, [])

  const editPageData = ({page, recipes}) => {
    console.log('editPageDataProps, page:',page, 'recipes',recipes)
    setCurrentData({
      page: page,
      recipes: recipes
    })
  }

  const renderSwitch = (currentData) => {  //Selects page to be displayed
    switch (currentData.page) {
      case ('recipe'):
        return (<RecipePage recipes={currentData.recipes} />)
      case ('mainPage'):
        return (<MainPage recipes={currentData.recipes}></MainPage>)
      case ('listPage'):
        return (<RecipeList 
          recipes={currentData.recipes}
          editPageData={editPageData}
          ></RecipeList>)
      default:
        return (
          <div>
          </div>
        )
    }
  }
  return (
    <div>
      <button onClick={() => editPageData({ page: 'mainPage', recipes: [] })}>MainPage</button>
      <button onClick={() => editPageData({ page: 'listPage', recipes: recipes })}>ListPage</button>
      <button onClick={() => editPageData({ page: '', recipes: [] })}>clear</button>
      <button onClick={() => editPageData({ page: 'recipe', recipes: recipes[0] })}>recipePage</button>
      {renderSwitch(currentData)}
    </div>
  )

}

export default App;
