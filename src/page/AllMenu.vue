<template>
  <div id="max">
    <div id="background">
    </div>
    <div id="content">
      <div id="head">
        <span id="back" @click="goBack">&lt;返回</span>
        <span id="insert" @click="goInsert">新增+</span>
      </div>
      <div id="goods">
        <div class="goods" v-for="item in goodsList">
          <div id="left">
            <img src="../assets/image/logo.jpg"/>
          </div>
          <div id="right">
            <table cellspacing="0px">
              <tr>
                <td>菜名:</td>
                <td>{{item.name}}</td>
                <td>价格:</td>
                <td>{{item.price}}</td>
              </tr>
              <tr>
                <td>类别:</td>
                <td v-show="item.type==1">主食</td>
                <td v-show="item.type==2">饮品</td>
                <td v-show="item.type==3">汤羹</td>
                <td v-show="item.type==4">炒菜</td>
                <td v-show="item.type==5">凉菜</td>
                <td v-show="item.type==6">烧烤</td>
                <td>折扣:</td>
                <td>{{item.discount}}</td>
              </tr>
              <tr>
                <td>限购:</td>
                <td v-show="item.limit==0">不限购</td>
                <td v-show="item.limit!=0">{{item.limit}}</td>
                <td>余量:</td>
                <td>{{item.goodsNum}}</td>
              </tr>
            </table>
          </div>
          <div/>
        </div>
        <div id="bottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {service} from "../js/api";

  export default {
    name: "AllMenu",
    data() {
      return {
        goodsList: null,
      }
    },
    mounted() {
      this.goGoods()
    },
    methods: {
      goBack() {
        window.location.href = "/my"
      },
      goInsert() {
        window.location.href = "/insertGoods"
      },
      goGoods() {
        service("get", "/cook/select/goods", {}).then(data => {
          if (data === undefined) {
            return;
          }
          if (data.code !== 200) {
            alert(data.message)
            return
          }
          if (data.code == 200) {
            this.goodsList = data.data;
            return
          }
        })
      }
    }
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

  #goods {
    width: 100%;
    height: 100%;
    overflow-y: auto;
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

  #back {
    display: inline-block;
    text-align: left;
    width: 45%;
  }

  #insert {
    text-align: right;
    display: inline-block;
    width: 45%;
  }

  .goods {
    margin: 0% 5% 5%;
    width: 90%;
    height: 100px;
    border-bottom: 1px black solid;
  }

  #left {
    display: inline-block;
    float: left;
    width: 35%;
    height: 100%;
  }

  #left img {
    width: 100%;
    height: 100%;
  }

  #right {
    display: inline-block;
    float: right;
    width: 65%;
    height: 100%;
  }

  table {
    width: 100%;
    text-align: left;
    margin-left: 1%;
  }

  tr {
    height: 35px;
  }

  td:first-child {
    width: 23%;
  }

  td:first-child + td {
    width: 39%;
  }

  td:first-child + td + td {
    width: 23%;
  }

  td:first-child + td + td + td {
    width: 15%;
  }
  #bottom{
    width: 100%;
    height: 100px;
  }
</style>
