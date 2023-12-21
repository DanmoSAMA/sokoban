import { setActivePinia, createPinia } from "pinia";
import { it, expect, describe, beforeEach } from "vitest";
import { useCargoStore } from "../cargo";

describe("group", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it("should add cargo", () => {
    const { cargos, createCargo, addCargo } = useCargoStore();
    addCargo(createCargo({ x: 1, y: 1 }));

    expect(cargos.length).toBe(1);
  });
});
