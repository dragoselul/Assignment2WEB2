import React from 'react';
import Card from '../Components/Card';
import Info from '../Components/Info';
import { useState } from "react";
import { useEffect } from "react";

const FrontPage = () =>{
    const [pokemons, setPokemons] = useState(null);
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0")
    const [pokeInfo,setPokeInfo]=useState();

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(setPokemons)
    }, [url])


    return (
    <>
    <div className="container">
        <div className="left-content">
            {
                pokemons?.results.map(poke=>{
                    return(
                        <Card key={poke.name} pokemonURL={poke.url} infoPoke={poke=>setPokeInfo(poke)}/>
                    )
            })
            }
            <div className="btn-group">
                {  pokemons?.previous && <button onClick={()=>{
                    setPokemons(null)
                    setUrl(pokemons?.previous) 
                }}>Previous</button>}
                { pokemons?.next && <button onClick={()=>{
                    setPokemons(null)
                    setUrl(pokemons?.next)
                    }}>Next</button>}
            </div>
            <div className="right-content">
                {pokeInfo != undefined ? (<Info data={pokeInfo}/>): <></>}
            </div>
        </div>
    </div>
    </>
    )
}

export default FrontPage;