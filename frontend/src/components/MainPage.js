import React from 'react'

const MainPage = () => {
    return (
        <div>
            <h1>Cooking Time</h1>
            <form>
                <input type="text"/>
                <input type="text"/>
                <button type="submit" onClick={()=>'ola'}>filter</button>
            </form>
        </div>
    )
}

export default MainPage