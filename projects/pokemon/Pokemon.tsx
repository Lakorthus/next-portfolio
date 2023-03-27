'use client';

import { useEffect, useState } from 'react';

export interface IPokemon {}

const Pokemon: React.FC<IPokemon> = () => {
  const [pokemon, setPokemon] = useState<any>(null);

  // random pokemon
  const randomPokemon = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
    const data = await res.json();
    const random = Math.floor(Math.random() * data.results.length);
    const pokemon = data.results[random];
    const pokemonRes = await fetch(pokemon.url);
    const pokemonData = await pokemonRes.json();
    setPokemon(pokemonData);
  };

  useEffect(() => {
    randomPokemon();
  }, []);

  return (
    <>
      {pokemon && (
        <div className="flex w-full justify-around mb-6 p-2">
          <picture
            className={`card w-1/3 rounded-full  cursor-pointer border border-gray-400  hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200o flex items-center justify-center bg-light-primary`}
          >
            <img
              className="rounded-full"
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
            />
          </picture>
          <div className="w-1/3 p-2 flex flex-col justify-center">
            <span className={`font-bold text-lg mb-2 text-dark-hot`}>
              #{pokemon.id.toString().padStart(3, '0')}
            </span>
            <h3
              className={`font-light font-mono text-sm transition-all duration-200 text-dark-content-text hover:text-dark-hot`}
            >
              {pokemon.name.toUpperCase()}
            </h3>
            <small
              className={`font-light font-mono text-sm transition-all duration-200 text-dark-content-text hover:text-dark-hot`}
            >
              Type: <span>{pokemon.types[0].type.name}</span>
            </small>
          </div>
        </div>
      )}

      <button className="btn btn-primary" onClick={randomPokemon}>
        Random Pokemon
      </button>
    </>
  );
};
export default Pokemon;
