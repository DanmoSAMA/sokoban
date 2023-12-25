import { defineStore } from "pinia";
import { Position } from "../composables";
import { reactive } from "vue";

interface Target {
  x: number;
  y: number;
}

export const useTargetStore = defineStore("target", () => {
  const targets: Target[] = reactive([]);

  function createTarget({ x, y }: { x: number; y: number }): Target {
    return {
      x,
      y
    };
  }

  function addTarget(target: Target) {
    targets.push(target);
  }

  function findTarget(pos: Position) {
    return targets.find((c) => {
      return c.x === pos.x && c.y === pos.y;
    });
  }

  return {
    targets,
    createTarget,
    addTarget,
    findTarget
  };
});
