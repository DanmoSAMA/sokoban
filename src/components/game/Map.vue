<template>
  <div>
    <div v-for="(row, i) in map" class="flex">
      <div v-for="(col, j) in map[i]">
        <template v-if="map[i][j] === MapTile.WALL">
          <img :src="wallImg" />
        </template>
        <template v-else-if="map[i][j] === MapTile.FLOOR">
          <img :src="floorImg" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMapStore, MapTile } from "../../store/map";
import floorImg from "../../assets/floor.png";
import wallImg from "../../assets/wall.png";

const { map } = useMapStore();
</script>

<style lang="scss" scoped></style>
