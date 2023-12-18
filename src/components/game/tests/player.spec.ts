import { it, expect, describe, beforeEach } from "vitest";
import { useMove } from "../player";
import { setActivePinia, createPinia } from "pinia";
import { usePlayerStore } from "../../../store/player";

describe("group", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it("should move to left when press ArrowLeft", () => {
    useMove();

    const { player } = usePlayerStore();
    player.x = 1;

    window.dispatchEvent(new KeyboardEvent("keyup", { code: "ArrowLeft" }));
    expect(player.x).toBe(0);
  });
});
