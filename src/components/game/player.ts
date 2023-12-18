import { usePlayerStore } from "../../store/player";

export function useMove() {
  const {
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToUp,
    movePlayerToDown
  } = usePlayerStore();

  function handleKeyup(e: KeyboardEvent) {
    switch (e.code) {
      case "ArrowLeft":
        movePlayerToLeft();
        break;
      case "ArrowRight":
        movePlayerToRight();
        break;
      case "ArrowUp":
        movePlayerToUp();
        break;
      case "ArrowDown":
        movePlayerToDown();
        break;
    }
  }

  return {
    addKeyupLisener: () => {
      window.addEventListener("keyup", handleKeyup);
    },
    removeKeyupListener: () => {
      window.removeEventListener("keyup", handleKeyup);
    }
  };
}
