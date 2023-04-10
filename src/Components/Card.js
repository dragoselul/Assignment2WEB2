import React from 'react';
import "./Card.css"
import { useState, useEffect } from "react"

const Card = ({pokemonURL, infoPoke}) => {
    const [pokemon, setPokemon] = useState(null)
    useEffect(() => {
        fetch(pokemonURL)
        .then(response => response.json())
        .then(setPokemon)
    }, [])
    return (
        <>
            <div className="card" key={pokemon?.id} onClick={()=>infoPoke(pokemon)}>
                <h2>{pokemon?.id}</h2>
                <img src={pokemon?.sprites.front_default} alt="" />
                <h2>{pokemon?.name}</h2>
                </div>
        </>
    )
}
export default Card;