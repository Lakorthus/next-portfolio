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
    <div className="flexCenter w-full">
      {pokemon && (
        <div className="flex w-full justify-around mb-6">
          <picture className={`card rounded-full justify-center glass`}>
            <img
              className="object-contain w-40 h-40"
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
            />
          </picture>
          <div className="w-1/2 p-2 gap-2 flexCenter flex-col">
            <span className={`krona-one font-bold text-lg mb-2 `}>
              #{pokemon.id.toString().padStart(3, '0')}
            </span>
            <h3 className={`font-light text-sm`}>
              {pokemon.name.toUpperCase()}
            </h3>
            <small className={`font-light text-sm`}>
              Type: <span>{pokemon.types[0].type.name}</span>
            </small>
          </div>
        </div>
      )}

      <div className="flexCenter flex-col w-full">
        <button
          className="btn btn-primary btn-sm"
          onClick={() => randomPokemon()}
        >
          Random Pokemon
        </button>
      </div>
    </div>
  );
};
export default Pokemon;
