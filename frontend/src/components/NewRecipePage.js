import React, { useState } from 'react'

const NewRecipePage = ({ editPageData }) => {
  const [newRecipe, setNewRecipe] = useState({
    name: '',
    ingredientsInfo: {
      servings: 0,
      ingredients: [],
    },
    steps: '',
    categories: [],
    origin: '',
    time: '',
  })
  const [newIngredient, setNewIngredient] = useState({
    ingredient: '',
    quantity: 0,
    unit: ''
  })
  const [newCategory, setNewCategory] = useState('')


  const handleSubmit = event => {
    event.preventDefault()
    return ''
  }
  const handleInputIngredientChange = event => {
    const target = event.target
    let copyObject = JSON.parse(JSON.stringify(newIngredient))
    switch (target.name) {
      case 'unit':
      case 'ingredient':
        copyObject[target.name] = target.value
        setNewIngredient(copyObject)
        break;
      case 'quantity':
        const parsedQuantity = parseFloat(target.value)
        if (isNaN(parsedQuantity)) {
          console.log('deu nan', copyObject)
          return setNewIngredient(copyObject)
        }
        copyObject.quantity = parsedQuantity

        setNewIngredient(copyObject)
        break;
      default:
        console.log('handleInputIngredient went to default')
    }
  }
  const handleInputChange = event => {
    const target = event.target
    let copyObject = JSON.parse(JSON.stringify(newRecipe))
    console.log('copyObject', copyObject)
    console.log('handle input change target', target)
    switch (target.name) {
      case 'servings':
        console.log('case servings')
        const newServing = parseFloat(target.value)
        console.log(newServing, 'newServing', isNaN(newServing))
        if (isNaN(newServing)) {
          console.log('deu nan', copyObject)
          return setNewRecipe(copyObject)
        }
        copyObject.ingredientsInfo.servings = newServing
        setNewRecipe(copyObject)
        break;

      case 'categories':
        console.log('case categories')
        setNewCategory(target.value)
        break;
      case 'name':
      case 'steps':
      case 'origin':
      case 'time': {
        console.log('case multiple')
        copyObject[target.name] = target.value
        setNewRecipe(copyObject)
        break;
      }
      default:
        console.log('input isnt in the cases')
        break;
    }
  }

  const createCategoryItems = (categories) => {
    return categories.map((category, index )=> {
      console.log('category', category)
      return <li key={index}>{category}</li>
    })
  }
  const addNewCategory = () => {
    const arrNewCategory = newRecipe.categories.concat([newCategory])

    let copyObject = JSON.parse(JSON.stringify(newRecipe))
    copyObject['categories'] = arrNewCategory
    setNewRecipe(copyObject)
    setNewCategory('')
  }
  const createIngredientItems = (ingredients) => {
    return ingredients.map(({ingredient, quantity, unit},index) => {
      console.log('ingredient', ingredient)
      return <li key={index}>{ingredient}, {quantity} {unit}</li>
    })
  }
  const addNewIngredient = () => {
    if (newIngredient.ingredient === '' || newIngredient.unit === '' || newIngredient.quantity === 0) {
      return ''
    }
    let copyObject = JSON.parse(JSON.stringify(newRecipe))
    copyObject.ingredientsInfo.ingredients = copyObject.ingredientsInfo.ingredients.concat([newIngredient])
    console.log('copyObject', copyObject.ingredientsInfo['ingredients'])
    console.log('copyObject', copyObject)
    setNewRecipe(copyObject)
    setNewIngredient({
      ingredient: '',
      quantity: 0,
      unit: ''
    })
  }
  return (
    <div>
      <h2>New recipe Page</h2>
      <form onSubmit={handleSubmit}>
        <ul>
          <li> Name: <input type='text' name='name' value={newRecipe.name} onChange={handleInputChange} /> </li>
          <li> Servings: <input type='number' name='servings' value={newRecipe.ingredientsInfo.servings} onChange={handleInputChange} /> </li>
          <ul className='ingredients-list'>
            <h3>Ingredients</h3>
            <ul>
              {createIngredientItems(newRecipe.ingredientsInfo.ingredients)}
            </ul>
            <li>ingredient: <input type='text' name='ingredient' value={newIngredient.ingredient} onChange={handleInputIngredientChange} /> </li>
            <li>quantity: <input type='number' name='quantity' value={newIngredient.quantity} onChange={handleInputIngredientChange} /> </li>
            <li>unit: <input type='text' name='unit' value={newIngredient.unit} onChange={handleInputIngredientChange} /> </li>
            <li><button onClick={addNewIngredient}>Add ingredient</button></li>
          </ul>
          <li>Steps: <input type='text' name='steps' value={newRecipe.steps} onChange={handleInputChange} /></li>
          <li>Categories:
            <input type='text' name='categories' value={newCategory} onChange={handleInputChange} />
            <button onClick={addNewCategory}> Add category</button>
            <ul>
              {createCategoryItems(newRecipe.categories)}
            </ul>
          </li>
          <li>Origin: <input type='text' name='origin' value={newRecipe.origin} onChange={handleInputChange} /></li>
          <li>Time: <input type='text' name='time' value={newRecipe.time} onChange={handleInputChange} /></li>
        </ul>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default NewRecipePage