import e, { Request, Response } from "express";
import PokemonService from "../services/PokemonService";

export function getAll(_: any, res: Response) {
  const pokemon = PokemonService.getAll();
  res.status(200).json(pokemon);
}

export function get(req: Request, res: Response) {
  try {
    const id = (req.params.id && +req.params.id) || undefined;
    if (!id) {
      throw "Se requiere el ID del pokemon.";
    }
    const pokemon = PokemonService.get(id);
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(400).send(error);
  }
}

export function findByName(req: Request, res: Response) {
  try {
    const name = req.params.name || undefined;
    if (!name) {
      throw "Se requiere el nombre del pokemon.";
    }
    const pokemon = PokemonService.findByName(name);
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(400).send(error);
  }
}

export function findByType(req: Request, res: Response) {
  const type = req.params.type || undefined;
  if (!type) {
    throw "Se requiere el tipo del pokemon.";
  }
  try {
    const pokemon = PokemonService.findByType(type);
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(400).send(error);
  }
}

export function stronger(req: Request, res: Response) {
  try {
    const pokemon1 = req.params.pokemon1;
    const pokemon2 = req.params.pokemon2;
    if (!pokemon1 || !pokemon2) {
      throw "Se requiere el tipo del pokemon.";
    }
    const pokemon = PokemonService.stronger(pokemon1, pokemon2);
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(400).send(error);
  }
}
