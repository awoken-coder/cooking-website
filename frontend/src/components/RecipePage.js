import image from '../images/canja-de-galinha.jpeg'


const RecipePage = ({ recipes }) => {
  if (!recipes) {return(null)}
  const { name, ingredientsInfo, steps, categories, origin, owner, time } = recipes
  const {servings, ingredients} = ingredientsInfo

  return (
    <>
      <h1>{name}</h1>
      <button>Edit</button>
      <h2>Categorias</h2>
      <ul>
        {categories.map(
          (category, index) => (<li key={index}> {category} </li>)
        )}
      </ul>
      <img src={image} alt='bowl of soup canja de galinha' width='400px' height='300px' />
      <p>Tempo de preparação: {time}</p>
      <h2>Ingredientes</h2>
      <p>Servings: {servings}</p>
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
