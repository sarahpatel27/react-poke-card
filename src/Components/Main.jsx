import React, { useEffect, useState } from 'react'
import './style.css'
import PokemonMini from './PokemonMini'
import Pokemon from './Pokemon'
import axios from 'axios'

const Main = () => {
    const [pokeInfo, setPokeInfo] = useState([]);
    const [waiting, setWaiting] = useState(true);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokDex, setPokDex] = useState()

    const allpokemon = async () => {
        setWaiting(true)
        const res = await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        setWaiting(false)
        //console.log(pokeInfo)
    }

    const getPokemon = async (res) => {
        res.map(async (item) => {
            const result = await axios.get(item.url)
            // console.log(result.data)
            setPokeInfo(elements => {
                elements = [...elements, result.data]
                
                return elements;
                elements.sort((a,b)=> a.id > b.id ? 1 : -1);
                
            })
        })
    }

    useEffect(() => {
        allpokemon();
    }, [url])


    return (
        <>
        <div className='heading'>
        <h1> POKEMON CHARACTERS</h1>
        <div className='container'>
            <div className='left-container'>
                <PokemonMini poke={pokeInfo} waiting={waiting} details={pok => setPokDex(pok)} />

                <div className="btns">
                    {prevUrl && <button onClick={() => {
                        setPokeInfo([])
                        setUrl(prevUrl)
                    }}>Previous</button>}

                    {nextUrl && <button onClick={() => {
                        setPokeInfo([])
                        setUrl(nextUrl)
                    }}>Next</button>}
                </div>
            </div>
            <div className="right-container">
                <Pokemon data={pokDex} />
            </div>
        </div>
        </div>
        </>
    )
}


export default Main