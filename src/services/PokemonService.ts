import { PokemonI } from "../interfaces/PokemonInterfaces";
const db = require("../db/Pokemons.json");

module PokemonService {
  export function getAll(): Array<PokemonI> {
    const pokemons: Array<PokemonI> = db;
    return pokemons;
  }

  export function get(id: number): PokemonI {
    const pokemons: Array<PokemonI> = db;
    const pokemon: Array<PokemonI> = pokemons.filter((e) => e.id === id);
    if (pokemons.length < 1) {
      throw "No se encontró el pokemon";
    }
    return pokemons[0];
  }

  export function findByName(name: string): PokemonI {
    const pokemons: Array<PokemonI> = db;
    const pokemon: PokemonI | undefined = pokemons.find((e) =>
      e.name.toLocaleLowerCase().match(name.toLocaleLowerCase())
    );
    if (!pokemon) {
      throw "No se encontró el pokemon";
    }
    return pokemon;
  }

  export function findByType(type: string): Array<PokemonI> {
    const pokemons: Array<PokemonI> = db;
    const pokemonsAux = pokemons.filter((e) =>
      e.type.filter((i) => i.name === type)
    );
    if (!pokemonsAux) {
      throw "No se encontró ningun pokemon con tipo " + type;
    }
    return pokemonsAux;
  }

  export function stronger(pokemon1name: string, pokemon2name: string): string {
    const pokemons: Array<PokemonI> = db;
    const pokemon1: PokemonI = pokemons.find(
      (e) => e.name === pokemon1.name
    ) as PokemonI;
    const pokemon2: PokemonI = pokemons.find(
      (e) => e.name === pokemon2.name
    ) as PokemonI;
    var returnAux = "";
    if (pokemon1 === null || pokemon2 === null) {
      throw "No se encontró el pokemon";
    }
    pokemon2.type.forEach((resp) => {
      resp.weakAgainst.forEach((element) => {
        const algo = pokemon1.type.filter((e) =>
          e.strongAgainst.includes(element)
        );
        console.log(algo);
        if (algo.length === 0) {
          returnAux = "Mas Poderoso es: " + pokemon1.name;
        } else {
          returnAux = "Mas Poderoso es: " + pokemon2.name;
        }
        const algo1 = pokemon1.type.filter((e) =>
          e.strongAgainst.includes(element)
        );
      });
    });
    return returnAux;
  }
}

export default PokemonService;
