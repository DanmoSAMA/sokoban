import { it, expect, describe, beforeEach } from "vitest";
import { usePlayerStore } from "../player";
import { createPinia, setActivePinia } from "pinia";
import { useMapStore } from "../map";

describe("group", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe("normal move", () => {
    beforeEach(() => {
      const { setupMap } = useMapStore();
      setupMap([
        [2, 2, 2],
        [2, 2, 2],
        [2, 2, 2]
      ]);
    });
    it("should move to left", () => {
      const { movePlayerToLeft, player } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToLeft();

      expect(player.x).toBe(0);
    });

    it("should move to right", () => {
      const { movePlayerToRight, player } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToRight();

      expect(player.x).toBe(2);
    });

    it("should move to up", () => {
      const { movePlayerToUp, player } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToUp();

      expect(player.y).toBe(0);
    });

    it("should move to down", () => {
      const { movePlayerToDown, player } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToDown();

      expect(player.y).toBe(2);
    });
  });

  describe("meet wall", () => {
    beforeEach(() => {
      const map = [
        [1, 1, 1, 1, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 1, 1, 1, 1]
      ];

      const { setupMap } = useMapStore();
      setupMap(map);
    });
    it("should not move to left when meet wall", () => {
      const { movePlayerToLeft, player } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToLeft();

      expect(player.x).toBe(1);
    });

    it("should not move to right when meet wall", () => {
      const { movePlayerToRight, player } = usePlayerStore();
      player.x = 3;
      player.y = 1;

      movePlayerToRight();

      expect(player.x).toBe(3);
    });

    it("should not move to up when meet wall", () => {
      const { movePlayerToUp, player } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToUp();

      expect(player.y).toBe(1);
    });

    it("should not move to down when meet wall", () => {
      const { movePlayerToDown, player } = usePlayerStore();
      player.x = 1;
      player.y = 3;

      movePlayerToDown();

      expect(player.y).toBe(3);
    });
  });
});
