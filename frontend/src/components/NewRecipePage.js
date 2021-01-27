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
  const [newIngredient, setNewIngredient] = useState({})
  const [newCategory, setNewCategory] = useState('')

  
  const handleSubmit = event => {
    event.preventDefault()
    return ''
  }

  const handleInputChange = event => {
    const target = event.target
    let copyObject = JSON.parse(JSON.stringify(newRecipe))
    console.log('handle input change target', target)
    switch (target.name) {
      case 'servings':
        console.log('case servings')
        if (target.value === '') {
          copyObject.ingredientsInfo.servings = target.value
          setNewRecipe(copyObject)
        }
        const newServing = parseInt(target.value)
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
  const addIngredient = event => {

  }
  const addNewCategory = () => {
    const arrNewCategory = newRecipe.categories.concat([newCategory])
    
    let copyObject = JSON.parse(JSON.stringify(  newRecipe))
    copyObject['categories'] = arrNewCategory
    setNewRecipe(copyObject)
    setNewCategory('')
  }

  return (
    <div>
      New recipe Page
      <form onSubmit={handleSubmit}>
        <ul>
          <li> Name: <input type='text' name='name' value={newRecipe.name} onChange={handleInputChange} /> </li>
          <li> Servings: <input type='number' name='servings' value={newRecipe.ingredientsInfo.servings} onChange={handleInputChange} /> </li>
          {/*     <li>Ingredients: <input type='text' onChange={handleInputChange} />
            <ul className='ingredients-list'></ul>
          </li> */}
          <li>Steps: <input type='text' name='steps' value={newRecipe.steps} onChange={handleInputChange} /></li>
          <li>Categories:
            <input type='text' name='categories' value={newCategory} onChange={handleInputChange} />
            <button onClick={addNewCategory}> Add category</button>

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