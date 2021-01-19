import React from 'react'
import RecipePage from './components/RecipePage'

const recipe = {
  name: 'Canja de galinha',
  ingredientsInfo: {
    servings: 3,
    ingredients: [
      { ingredient: 'galinha', quantity: 1, unit: '' },
      { ingredient: 'massa de canja', quantity: 200, unit: 'gramas' },
      { ingredient: 'sumo de limão', quantity: 1, unit: 'limão' },
      { ingredient: 'sal', quantity: 0, unit: 'qb' },
      { ingredient: 'hortelã', quantity: 0, unit: 'qb' }
    ]
  },
  steps: 'Ferver a água com a galinha. Adicionar a massa e sal. Deixar cozer durante 30 minutos. Adicionar o sumo de limão e a hortelã e servir.',
  categories: ['Soupa', 'Portuguêsa'],
  origin: 'www.cozinhar.pt/canja-de-galinha',
  owner: 'João Francisco',
  time: '30 minutos'
}
const App = () => {
  return (
    <RecipePage recipe={recipe} />
  )
}

export default App;
