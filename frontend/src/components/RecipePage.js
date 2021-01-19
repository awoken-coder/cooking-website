import image from '../images/canja-de-galinha.jpeg'


const RecipePage = ({ recipe }) => {
  const { name, ingredients, steps, categories, origin, owner, time } = recipe

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

export default RecipePage;
