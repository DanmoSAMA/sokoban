import { defineStore } from "pinia";
import { reactive } from "vue";

export const usePlayerStore = defineStore("player", () => {
  const player = reactive({
    x: 1,
    y: 1
  });

  function movePlayerToLeft() {
    player.x--;
  }

  function movePlayerToRight() {
    player.x++;
  }

  function movePlayerToUp() {
    player.y--;
  }

  function movePlayerToDown() {
    player.y++;
  }

  return {
    player,
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToUp,
    movePlayerToDown
  };
});
