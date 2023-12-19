import { it, expect, describe, beforeEach } from "vitest";
import { useMove } from "../player";
import { setActivePinia, createPinia } from "pinia";
import { usePlayerStore } from "../../../store/player";
import { useMapStore } from "../../../store/map";

describe("group", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should", () => {
    expect(true).toBe(true);
  });

  // it("should move to left when press ArrowLeft", () => {
  //   useMove();

  //   const { player } = usePlayerStore();
  //   player.x = 1;
  //   player.y = 1;

  //   const { setupMap } = useMapStore();
  //   setupMap([
  //     [2, 2, 2],
  //     [2, 2, 2],
  //     [2, 2, 2]
  //   ]);

  //   window.dispatchEvent(new KeyboardEvent("keyup", { code: "ArrowLeft" }));
  //   expect(player.x).toBe(0);
  // });
});
