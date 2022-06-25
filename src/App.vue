<template>
  <div id="app">
    <!-- a simple trick to reload the component -->
    <Game :key="games" v-on:new-game="games++" />
  </div>
</template>

<script>
import Game from "./components/Game.vue";

export default {
  data() {
    return { games: 0 };
  },
  components: {
    Game,
  },
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

:root {
  --dark: #111;
  --bg-dark: #222;
  --bg: #333;
  --bg-light: #444;
  --text: #ddd;
  --solved: rgba(50, 255, 50, 0.2);
}
</style>
