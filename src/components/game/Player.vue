<template>
  <div class="absolute" :style="position">
    <img :src="keeper" />
  </div>
</template>

<script setup lang="ts">
import keeper from "../../assets/keeper.png";
import { usePlayerStore } from "../../store/player";
import { computed, onMounted, onUnmounted } from "vue";
import { useMove } from "./player";

const { addKeyupLisener, removeKeyupListener } = useMove();

onMounted(() => {
  addKeyupLisener();
});

onUnmounted(() => {
  removeKeyupListener();
});

const { position } = usePosition();

function usePosition() {
  const { player } = usePlayerStore();
  const STEP = 32;

  const position = computed(() => ({
    left: player.x * STEP + "px",
    top: player.y * STEP + "px"
  }));

  return {
    position
  };
}
</script>

<style lang="scss" scoped></style>
