<template>
  <td
    class="tile"
    @click="$emit('tile-clicked', { x: rowNumber, y: columnNumber })"
    :class="{ 'blank-tile': tileNumber === BLANK_NUMBER }"
  >
    {{ tileNumber === BLANK_NUMBER ? "" : tileNumber }}
  </td>
</template>

<script>
import { BLANK_NUMBER } from "@/assets/board";

export default {
  data() {
    return { BLANK_NUMBER };
  },
  props: {
    tileNumber: {
      type: Number,
      required: true,
    },
    rowNumber: {
      type: Number,
      required: true,
    },
    columnNumber: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.tile {
  width: 100px;
  height: 100px;
  text-align: center;
  font-size: 30px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: var(--bg);
  cursor: pointer;
}

.tile:hover:not(.blank-tile) {
  background-color: var(--bg-dark);
}

.blank-tile {
  background-color: var(--bg-light);
}
</style>
