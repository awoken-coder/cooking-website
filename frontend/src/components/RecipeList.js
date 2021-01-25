import React from 'react'

const RecipeList = ({ recipes, editPageData }) => {
    const listGenerator = (recipes) => {
        return recipes.map((recipe) => {
            return (
                <li key={recipe.id}>
                    {recipe.name}
                    <div>
                        <ul>
                            {recipe.categories.map((category) => (
                            <li key={category}>{category}</li>
                            ))}
                        </ul>
                    </div>
                    <button onClick={()=>editPageData({page:'recipe',recipes:recipe})}>Show more</button>
                </li>
            )

        })
    }
    return (
        <ul>
            {listGenerator(recipes)}
        </ul>
    )
}

export default RecipeList