import React from 'react'
import RecipeList from './RecipeList'

const MainPage = ({recipes}) => {
    return (
        <div>
            <h1>Cooking Time</h1>
            <form>
                <input type="text"/>
                <input type="text"/>
                <button type="submit" onClick={()=>'ola'}>filter</button>
            </form>
            <RecipeList recipes={recipes}/>

        </div>
    )
}

export default MainPage