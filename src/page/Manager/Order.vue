<template>
  <div id="max">
    <div id="background"></div>
    <div id="content">
      <div id="data">
        <div id="head">
          <div>
            <select id="status" v-model="status" @change="getOrder">
              <option value="">全部</option>
              <option value="0">已取消</option>
              <option value="1">待接单</option>
              <option value="2">制作中</option>
              <option value="3">已完成</option>
            </select>
          </div>
          <table id="headOne" cellspacing="0" align="right">
            <tr>
              <td class="a">序号</td>
              <td class="aa">菜名</td>
              <td class="a">数量</td>
              <td class="aaaa">时间</td>
              <td class="aaa">状态</td>
            </tr>
          </table>
        </div>
        <table cellspacing="0" align="right" id="dataOne">
          <tr v-for="(item,index) in order" class="orderData">
            <td class="a">{{index+1}}</td>
            <td class="aa">{{item.goodsName}}</td>
            <td class="a">{{item.num}}</td>
            <td class="aaaa">{{buildDate(item.updateTime)}}</td>
            <td class="aaa" v-show="item.status==0"><span>已取消</span></td>
            <td class="aaa" v-show="item.status==1"><span>待接单</span></td>
            <td class="aaa" v-show="item.status==2"><span>制作中</span></td>
            <td class="aaa" v-show="item.status==3"><span>已完成</span></td>
          </tr>
        </table>
        <div id="back"><span id="backOne" @click="goBack()">返回</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {service} from "../../js/api";

  export default {
    name: "Order",
    data() {
      return {
        order: null,
        status: ''
      }
    },
    mounted() {
      this.getOrder();
    },
    methods: {
      getOrder() {
        service("get", "/manager/select/billDetail", {status: this.status}).then(data => {
          if (data === undefined) {
            return
          }
          if (data.code !== 200) {
            alert(data.message)
            this.order = null
            return
          }
          if (data.code == 200) {
            this.order = data.data
            return
          }
        })
      },
      buildDate(time) {
        let date = new Date(time),
          year = date.getFullYear(),
          month = date.getMonth() + 1,
          day = date.getDate(),
          hour = date.getHours(),
          min = date.getMinutes(),
          senders = date.getSeconds()
        return year + '-' +
          (month < 10 ? '0' + month : month) + '-' +
          (day < 10 ? '0' + day : day) + ' ' +
          (hour < 10 ? '0' + hour : hour) + ':' +
          (min < 10 ? '0' + min : min) + ':' +
          (senders < 10 ? '0' + senders : senders)
      },
      goBack() {
        window.location.href = "/my"
      }
    }
  }
</script>

<style scoped>
  #max {
    width: 100%;
    height: 100%;
    padding-bottom: 50px;
  }

  #background {
    position: fixed;
    z-index: 2;
    background: linear-gradient(45deg, #FFFAFA, #FFE4B5);
    width: 100%;
    height: 100%;
  }

  #content {
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
  }

  #data {
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }

  #head {
    position: fixed;
    background: linear-gradient(45deg, #FF0000, #FFFAFA);
    z-index: 1000;
    height: 70px;
    width: 100%;
  }

  select {
    background: transparent;
    float: right;
  }

  select :focus {
    outline: none;
  }

  #headOne {
    margin: 0px 20px 0px;
  }

  table {
    font-family: 仿宋;
    width: 90%;
    text-align: center;

  }

  #dataOne {
    margin: 70px 20px 50px;
  }

  td {
    height: 50px;
  }

  #dataOne td {
    border-bottom: 1px black solid;
  }

  .a {
    width: 12%;
  }

  .aa {
    width: 20%;
  }

  .aaa {
    width: 18%;
  }

  span {
    color: grey;
    border-radius: 12px;
    background-color: rgba(211, 211, 211, 0.5);
  }

  #back {
    background: linear-gradient(45deg, #FFFAFA, #FF0000);
    text-align: left;
    line-height: 50px;
    display: inline-block;
    width: 100%;
    height: 50px;
    position: fixed;
    z-index: 1000;
    bottom: 0;
  }

  #backOne {
    margin-left: 10%;
    padding: 2% 5% 2%;
    border-radius: 25px;
  }
</style>
