<template>
  <div>
    <div class="absolute" :style="position">
      <img :src="TargetImg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TargetImg from "../../assets/target.png";
import { usePosition } from "../../composables";

interface Props {
  x: number;
  y: number;
}

const props = defineProps<Props>();
const { position } = usePosition(props);
</script>

<style scoped></style>
