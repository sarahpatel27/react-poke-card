import React from 'react'
import './style.css'

const PokemonMini = ({poke, waiting,details}) => {
    console.log(poke)
    return (
        <>{
            waiting ? <h1>Loading... </h1> :
                poke.map((item) => {
                    return (
                        <>
                            <div className='pokemon-mini' key={item.id} onClick={()=> details(item)}>
                                <h2>{item.id}</h2>
                                <img src={item.sprites.front_default} alt='' />
                                <h2>{item.name}</h2>

                            </div>
                        </>
                    )
                })
        }

        </>

    )
}


export default PokemonMini