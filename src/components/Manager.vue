<template>
  <div class="page">
    <div id="content">
      <router-view/>
    </div>
    <div id="bottom">
      <footer>
        <div v-for='item in navList' class="bottomDiv">
          <router-link :to='item.path'>
            <span>{{item.name}}</span>
          </router-link>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        navList: [
          {
            'path': '/goods',
            'name': '商品'
          },
          {
            'path': '/order',
            'name': '订单'
          },
          {
            'path': '/smallCook',
            'name': '厨师'
          },
          {
            'path': '/desk',
            'name': '桌子'
          }
        ]
      }
    },
    computed: {
      activeRoute() {
        return this.$route.path
      }
    }
  }
</script>

<style scoped>
  .page {
    width: 100%;
    height: 100%;
  }

  #content {
    width: 100%;
    height: 90%;
  }

  #bottom {
    position: fixed;
    bottom: 0;
    z-index: 1000;
    height: 50px;
    width: 100%;
    background-color: red;
  }

  footer {
    margin-bottom: 0;
  }

  .bottomDiv {
    line-height: 50px;
    display: inline-block;
    text-align: center;
    width: 25%;
  }

  a {
    text-decoration-line: none;
    color: #000;
  }
  .router-link-active {
    color: yellow;
  }
</style>
