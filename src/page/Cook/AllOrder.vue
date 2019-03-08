<template>
  <div>
    <div>1212</div>
  </div>
</template>

<script>

  export default {
    name: "AllOrder",
    data() {
      return {}

    },
    mounted() {
      this.getTest()
    },
    methods: {
      getTest() {
        console.log("liang")
      }
    }
  }
</script>

<style scoped>
  div {
    width: 100%;
    height: 100%;
    background-color: black;
  }
</style>
