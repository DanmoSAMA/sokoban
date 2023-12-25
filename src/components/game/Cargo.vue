<template>
  <div>
    <div class="absolute" :style="position">
      <img :src="cargo.onTarget ? cargoOnTargetImg : cargoImg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import cargoImg from "../../assets/cargo.png";
import cargoOnTargetImg from "../../assets/cargo_on_target.png";
import { Cargo } from "../../store/cargo";
import { usePosition } from "../../composables";

interface Props {
  cargo: Cargo;
}

const props = defineProps<Props>();
const { position } = usePosition(props.cargo);
</script>

<style scoped></style>
