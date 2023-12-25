import { it, expect, describe, beforeEach } from "vitest";
import { usePlayerStore } from "../player";
import { createPinia, setActivePinia } from "pinia";
import { useMapStore } from "../map";
import { useCargoStore } from "../cargo";

describe("player", () => {
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

  describe("player meet wall", () => {
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

  describe("player meet cargo", () => {
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

    it("should move cargo to left", () => {
      const { createCargo, addCargo } = useCargoStore();
      const cargo = createCargo({ x: 2, y: 2 });
      addCargo(cargo);

      const { movePlayerToLeft, player } = usePlayerStore();
      player.x = 3;
      player.y = 2;

      movePlayerToLeft();

      expect(player.x).toBe(2);
      expect(cargo.x).toBe(1);
    });

    it("should move cargo to right", () => {
      const { createCargo, addCargo } = useCargoStore();
      const cargo = createCargo({ x: 2, y: 2 });
      addCargo(cargo);

      const { movePlayerToRight, player } = usePlayerStore();
      player.x = 1;
      player.y = 2;

      movePlayerToRight();

      expect(player.x).toBe(2);
      expect(cargo.x).toBe(3);
    });

    it("should move cargo to top", () => {
      const { createCargo, addCargo } = useCargoStore();
      const cargo = createCargo({ x: 2, y: 2 });
      addCargo(cargo);

      const { movePlayerToUp, player } = usePlayerStore();
      player.x = 2;
      player.y = 3;

      movePlayerToUp();

      expect(player.y).toBe(2);
      expect(cargo.y).toBe(1);
    });

    it("should move cargo to down", () => {
      const { createCargo, addCargo } = useCargoStore();
      const cargo = createCargo({ x: 2, y: 2 });
      addCargo(cargo);

      const { movePlayerToDown, player } = usePlayerStore();
      player.x = 2;
      player.y = 1;

      movePlayerToDown();

      expect(player.y).toBe(2);
      expect(cargo.y).toBe(3);
    });

    describe("cargo hit", () => {
      it("should not push a cargo when the cargo hits the wall", () => {
        const { createCargo, addCargo } = useCargoStore();
        const cargo = createCargo({ x: 1, y: 1 });
        addCargo(cargo);

        const { movePlayerToLeft, player } = usePlayerStore();
        player.x = 2;
        player.y = 1;

        movePlayerToLeft();

        expect(player.x).toBe(2);
        expect(cargo.x).toBe(1);
      });

      it("should not push a cargo when the cargo hits other cargo", () => {
        const { createCargo, addCargo } = useCargoStore();
        const firstCargo = createCargo({ x: 2, y: 2 });
        const secondCargo = createCargo({ x: 3, y: 2 });
        addCargo(firstCargo);
        addCargo(createCargo(secondCargo));

        const { movePlayerToRight, player } = usePlayerStore();
        player.x = 1;
        player.y = 2;

        movePlayerToRight();

        expect(player.x).toBe(1);
        expect(firstCargo.x).toBe(2);
        expect(secondCargo.x).toBe(3);
      });
    });
  });
});
