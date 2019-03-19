<template>
  <div id="max">
    <div id="background">
    </div>
    <div id="content">
      <div id="head">
        <input type="text" v-model="goodsName" placeholder="请输入菜名" @blur="goGoods"/>
        <select @change="goGoods()" v-model="goodsType">
          <option value="">任意</option>
          <option value="1">主食</option>
          <option value="2">饮品</option>
          <option value="3">汤羹</option>
          <option value="4">炒菜</option>
          <option value="5">凉菜</option>
          <option value="6">烧烤</option>
        </select>查询
      </div>
      <div id="goods">
        <div class="goods" v-for="item in goodsList">
          <div id="left">
            <img src="../../assets/image/logo.jpg" @click="getUpdateGoods(item.id)"/>
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
  import {service} from "../../js/api";

  export default {
    name: "Goods",
    data() {
      return {
        goodsList: null,
        goodsName: null,
        goodsType: ''
      }
    },
    mounted() {
      this.goGoods()
    },
    methods: {
      goGoods() {
        service("get", "/manager/goodsList", {goodsName: this.goodsName, goodsType: this.goodsType}).then(data => {
          if (data === undefined) {
            return;
          }
          if (data.code !== 200) {
            alert(data.message)
            this.goodsList = ''
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
    z-index: 999;
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
input{
  margin-top: 5%;
  background: transparent;
}
input:focus{
  outline: none;
}
  input[type="text"]{
    margin-left: 5%;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom:0.5px black solid;
    float: left;;
    width: 35%;
  }
  input[type="button"]{
    margin-left: 8%;
    float: left;
    width: 15%;
  }
select:focus{
  outline: none;
}
  select {
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom:0.5px #000 solid;
    background: transparent;
    margin-top: 5%;
    margin-left: 8%;
    float: left;
    width: 20%;
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

  #bottom {
    width: 100%;
    height: 100px;
  }

</style>
