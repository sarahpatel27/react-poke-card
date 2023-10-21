import React from 'react'
import './style.css'

const Pokemon = ({ data }) => {
    console.log(data)
    return (
        <>
            <div className="card">
                {
                    (!data) ? "" : (
                        <>
                            <h1>{data.name}</h1>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt='' />
                            <div className='ability'>
                                {
                                    data.abilities.map(pok => {
                                        return (
                                            <>
                                                <div className="group">
                                                    <h2>{pok.ability.name}</h2>
                                                </div>
                                            </>
                                        )
                                    })
                                }

                            </div>
                            <div className="base-stats">

                                {
                                    data.stats.map( pok => {
                                        return (
                                            <>
                                            <h3>{pok.stat.name} : {pok.base_stat}</h3>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </>
                    )
                }

            </div>
        </>
    )
}



export default Pokemon