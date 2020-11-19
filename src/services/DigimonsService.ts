import { DigimonI } from "../interfaces/DigimonInterfaces";
const db = require("../db/Digimons.json");

module DigimonsService {
  export function getAll(): Array<DigimonI> {
    const digimons: Array<DigimonI> = db;
    return digimons;
  }

  export function get(id: number): DigimonI {
    const digimons: Array<DigimonI> = db;
    const digimon: Array<DigimonI> = digimons.filter((e) => e.id === id);
    if (digimon.length < 1) {
      throw "No se encontró el digimon";
    }
    return digimon[0];
  }

  export function findByName(name: string): DigimonI {
    const digimons: Array<DigimonI> = db;
    const digimon: DigimonI | undefined = digimons.find((e) =>
      e.name.toLocaleLowerCase().match(name.toLocaleLowerCase())
    );
    if (!digimon) {
      throw "No se encontró el digimon";
    }
    return digimon;
  }

  export function findByType(type: string): Array<DigimonI> {
    const digimons: Array<DigimonI> = db;
    const digimonsAux = digimons.filter((e) =>
      e.type.filter((i) => i.name === type)
    );
    if (!digimonsAux) {
      throw "No se encontró ningun digimon con tipo " + type;
    }
    return digimonsAux;
  }

  export function stronger(digimon1name: string, digimon2name: string): string {
    const digimons: Array<DigimonI> = db;
    const digimon1: DigimonI = digimons.find(
      (e) => e.name === digimon1name
    ) as DigimonI;
    const digimon2: DigimonI = digimons.find(
      (e) => e.name === digimon2name
    ) as DigimonI;
    var returnAux = "";
    if (digimon1 === null || digimon2 === null) {
      throw "No se encontró el digimon";
    }
    digimon2.type.forEach((resp) => {
      resp.weakAgainst.forEach((element) => {
        console.log(element);
        const algo = digimon1.type.filter((e) =>
          e.strongAgainst.includes(element)
        );
        console.log(algo);
        if (algo.length === 0) {
          returnAux = "Mas Poderoso es: " + digimon1name;
        } else {
          returnAux = "Mas Poderoso es: " + digimon2name;
        }
        const algo1 = digimon1.type.filter((e) =>
          e.strongAgainst.includes(element)
        );
      });
    });
    return returnAux;
  }
}

export default DigimonsService;
