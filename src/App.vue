<template>
  <div id="app">
    <div class="grid">
      <h1>Pixel designer</h1>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #ecf0f1;
    background: #2c3e50;
  }

  h1 {
    margin: 0;
    padding: 10px 0 20px 0;
  }

  a {
    color: #3498db;

    &:hover {
      color: #2980b9;
    }
  }

  .grid {
    max-width: 800px;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    @media only screen and (min-width: 578px) {
      flex-direction: row;
    }
  }

  .grid-preview {
    width: 64px;
    padding-top: 20px;
    @media only screen and (min-width: 578px) {
      padding-left: 20px;
      padding-top: 0;
    }
  }

  .grid-palette {
    padding-bottom: 20px;
    @media only screen and (min-width: 578px) {
      width: 100px;
      padding-right: 20px;
    }
  }

  .grid-main {
    flex: 1;
  }
</style>
