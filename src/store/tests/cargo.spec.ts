import { setActivePinia, createPinia } from "pinia";
import { it, expect, describe, beforeEach } from "vitest";
import { useCargoStore } from "../cargo";
import { useTargetStore } from "../target";

describe("group", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it("should add cargo", () => {
    const { cargos, createCargo, addCargo } = useCargoStore();
    addCargo(createCargo({ x: 1, y: 1 }));

    expect(cargos.length).toBe(1);
  });

  describe("on target", () => {
    it("shift in", () => {
      const { createCargo, addCargo, moveCargo } = useCargoStore();
      const cargo = createCargo({ x: 1, y: 1 });
      addCargo(cargo);

      const { createTarget, addTarget } = useTargetStore();
      const target = createTarget({ x: 2, y: 1 });
      addTarget(target);

      moveCargo(cargo, 1, 0);

      expect(cargo.onTarget).toBe(true);
    });

    it("shift out", () => {
      const { createCargo, addCargo, moveCargo } = useCargoStore();
      const cargo = createCargo({ x: 1, y: 1 });
      addCargo(cargo);

      const { createTarget, addTarget } = useTargetStore();
      const target = createTarget({ x: 2, y: 1 });
      addTarget(target);

      moveCargo(cargo, 1, 0);
      moveCargo(cargo, 1, 0);

      expect(cargo.onTarget).toBe(false);
    });
  });
});
