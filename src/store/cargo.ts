import { defineStore } from "pinia";
import { Position } from "../composables";
import { reactive } from "vue";

interface Cargo {
  x: number;
  y: number;
}

export const useCargoStore = defineStore("cargo", () => {
  const cargos: Cargo[] = reactive([]);

  function createCargo({ x, y }: { x: number; y: number }): Cargo {
    return {
      x,
      y
    };
  }

  function addCargo(cargo: Cargo) {
    cargos.push(cargo);
  }

  function findCargo(pos: Position) {
    return cargos.find((c) => {
      return c.x === pos.x && c.y === pos.y;
    });
  }

  return {
    cargos,
    createCargo,
    addCargo,
    findCargo
  };
});
