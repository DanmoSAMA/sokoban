import { defineStore } from "pinia";
import { reactive } from "vue";
import { useMapStore } from "./map";

export const usePlayerStore = defineStore("player", () => {
  const player = reactive({
    x: 1,
    y: 1
  });

  const { isWall } = useMapStore();

  function movePlayerToLeft() {
    if (isWall({ x: player.x - 1, y: player.y })) {
      return;
    }

    player.x--;
  }

  function movePlayerToRight() {
    console.log(player.x, player.y, isWall({ x: player.x + 1, y: player.y }));
    if (isWall({ x: player.x + 1, y: player.y })) {
      return;
    }

    player.x++;
  }

  function movePlayerToUp() {
    if (isWall({ x: player.x, y: player.y - 1 })) {
      return;
    }

    player.y--;
  }

  function movePlayerToDown() {
    if (isWall({ x: player.x, y: player.y + 1 })) {
      return;
    }

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
