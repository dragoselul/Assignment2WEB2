import { useState, useEffect } from "react"
import "./Card.css"

export default function PokeInfo({data}){
    return (
    <>
    <div className="info">
        <h1>{data?.name}</h1>
        <h1>{data?.id}</h1>
        <img src={data?.sprites.front_default} alt="Not Found"></img>
        <div className="abilities">
                        {
                            data?.abilities.map(poke=>{
                                return(
                                    <>
                                     <div className="group">
                                        <h2>{poke.ability.name}</h2>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="types">
                        {
                            data?.types.map(poke=>{
                                return(
                                    <>
                                     <div className="group">
                                        <h2>{poke.type.name}</h2>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
    </div>
    </>
    )

}