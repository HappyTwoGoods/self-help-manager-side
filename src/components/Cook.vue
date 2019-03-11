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
            'path': '/newOrder',
            'name': '新订单'
          },
          {
            'path': '/producting',
            'name': '已接订单'
          },
          {
            'path': '/my',
            'name': '我的'
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
  #bottom {
    position: fixed;
    bottom:0;
    z-index: 1000;
    height: 50px;
    width: 100%;
    background: linear-gradient(45deg, #FF0000,#FFFAFA);
  }
  .bottomDiv {
    line-height: 50px;
    display: inline-block;
    text-align: center;
    width: 33.3%;
    font-size: 20px;
  }

  a {
    text-decoration-line: none;
    color: #000;
  }

  .router-link-active {
    color: yellow;
  }
</style>
