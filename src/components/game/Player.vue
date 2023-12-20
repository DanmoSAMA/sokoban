<template>
  <div class="absolute" :style="position">
    <img :src="keeperImg" />
  </div>
</template>

<script setup lang="ts">
import keeperImg from "../../assets/keeper.png";
import { onMounted, onUnmounted } from "vue";
import { useMove } from "./player";
import { usePosition } from "../../composables";
import { usePlayerStore } from "../../store/player";

const { addKeyupLisener, removeKeyupListener } = useMove();

onMounted(() => {
  addKeyupLisener();
});

onUnmounted(() => {
  removeKeyupListener();
});

const { player } = usePlayerStore();
const { position } = usePosition(player);
</script>

<style lang="scss" scoped></style>
