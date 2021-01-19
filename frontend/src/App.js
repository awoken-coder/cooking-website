import React from 'react'
import image from './images/canja-de-galinha.jpeg'

const App = () => {
  const recipe = {
    name: 'Canja de galinha',
    ingredients: [
      { ingredient: 'galinha', quantity: 1, unit: '' },
      { ingredient: 'massa de canja', quantity: 200, unit: 'gramas' },
      { ingredient: 'sumo de limão', quantity: 1, unit: 'limão' },
      { ingredient: 'sal', quantity: 0, unit: 'qb' },
      { ingredient: 'hortelã', quantity: 0, unit: 'qb' }
    ],
    steps: 'Ferver a água com a galinha. Adicionar a massa e sal. Deixar cozer durante 30 minutos. Adicionar o sumo de limão e a hortelã e servir.',
    categories: ['Soupa', 'Portuguêsa'],
    origin: 'www.cozinhar.pt/canja-de-galinha',
    owner: 'João Francisco',
    time: '30 minutos'
  }
  const {name, ingredients, steps, categories, origin, owner, time} = recipe
  
  return (
    <>
      <h1>{name}</h1>
      <h2>Categorias</h2>
      <ul>
        {categories.map(
          (category, index) => (<li key={index}> {category} </li>)
        )}

      </ul>
      <img src={image} alt='bowl of soup canja de galinha' width='400px' height='300px' />
      <p>Tempo de preparação: {time}</p>
      <h2>Ingredientes</h2>
      <ul>
        {ingredients.map(
          ({ ingredient, quantity, unit }, index) => (
            <li key={index}> {ingredient}, {quantity} {unit};</li>
          )
        )}
      </ul>
      <h2>Receita</h2>
      <p>{steps}</p>
      <h2>Fonte</h2>
      <p>{origin}</p>
      <h2>Owner</h2>
      <p>{owner}</p>
    </>
  );
}

export default App;
