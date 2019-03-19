<template>
  <div id="max">
    <div id="background">
    </div>
    <div id="content">
      <div id="head"></div>
      <div id="desk"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Desk"
    }
</script>

<style scoped>
  #max {
    width: 100%;
    height: 100%;
    bottom: 50px;
  }

  #background {
    position: fixed;
    z-index: 0;
    overflow-y: auto;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #FFE4B5, #FFFAFA);
  }

  #content {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1;
  }
  #head {
    background: linear-gradient(45deg, #FF0000, #FFFAFA);
    display: inline-block;
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-family: 仿宋;
    font-size: 20px;

  }
</style>
