<template>
  <router-link to="/" class="fixed top-0 left-0 z-10 bg-gray-300 p-1 rounded-br">Back</router-link>
  <router-view/>
</template>

<style lang="scss">
@import "src/scss/main.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
