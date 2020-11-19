import e, { Request, Response } from "express";
import DigimonsService from "../services/DigimonsService";

export function getAll(_: any, res: Response) {
  const digimons = DigimonsService.getAll();
  res.status(200).json(digimons);
}

export function get(req: Request, res: Response) {
  try {
    const id = (req.params.id && +req.params.id) || undefined;
    if (!id) {
      throw "Se requiere el ID del digimon.";
    }
    const digimon = DigimonsService.get(id);
    res.status(200).json(digimon);
  } catch (error) {
    res.status(400).send(error);
  }
}

export function findByName(req: Request, res: Response) {
  try {
    const name = req.params.name || undefined;
    if (!name) {
      throw "Se requiere el nombre del digimon.";
    }
    const digimon = DigimonsService.findByName(name);
    res.status(200).json(digimon);
  } catch (error) {
    res.status(400).send(error);
  }
}

export function findByType(req: Request, res: Response) {
  console.log("Entro al controlador");

  const type = req.params.type || undefined;
  if (!type) {
    throw "Se requiere el tipo del digimon.";
  }
  try {
    const digimon = DigimonsService.findByType(type);
    res.status(200).json(digimon);
  } catch (error) {
    res.status(400).send(error);
  }
}

export function stronger(req: Request, res: Response) {
  try {
    const digimon1 = req.params.digimon1;
    const digimon2 = req.params.digimon2;
    if (!digimon1 || !digimon2) {
      throw "Se requiere el tipo del digimon.";
    }
    const digimon = DigimonsService.stronger(digimon1, digimon2);
    res.status(200).json(digimon);
  } catch (error) {
    res.status(400).send(error);
  }
}
