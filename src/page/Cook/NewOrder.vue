<template>
  <div id="max">
    <div id="background"></div>
    <div id="content">
      <div id="data">
        <div id="head">
          <table id="headOne" cellspacing="0" align="right">
            <tr>
              <td class="a">序号</td>
              <td class="aa">菜名</td>
              <td class="a">数量</td>
              <td class="aaa">时间</td>
              <td class="a">操作</td>
            </tr>
          </table>
        </div>
        <table cellspacing="0" align="right" id="dataOne">
          <tr v-for="(item,index) in order" class="orderData">
            <td class="a">{{index+1}}</td>
            <td class="aa">{{item.goodsName}}</td>
            <td class="a">{{item.num}}</td>
            <td class="aaa">{{buildDate(item.updateTime)}}</td>
            <td class="a" @click="getChangeState(item.id)"><span>接单</span></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import {service} from "../../js/api";

  export default {
    name: "NewOrder",
    data() {
      return {
        order: null,
        interval: null
      }
    },
    created() {
      this.getOrder();
      this.interval = setInterval(this.getOrder, 1000);
    },
    methods: {
      getOrder() {
        service("get", "/cook/selectOrderByState", {state: 1}).then(data => {
          if (data === undefined) {
            return
          }
          if (data.code !== 200 && data.code !== 404) {
            alert(data.message)
            return
          }
          if (data.code == 200) {
            this.order = data.data
            return
          }
        })
      },
      getChangeState(billId) {
        service("get", "/cook/changeOrderStatus", {orderId: billId}).then(
          data => {
            if (data === undefined) {
              return
            }
            if (data.code !== 200 && data.code !== 404) {
              alert(data.message)
              window.location.href = "/cook"
              return
            }
            if (data.code == 200) {
              alert(data.message)
              window.location.href = "/cook"
            }
          }
        )
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
      }
    },
    beforeDestroy() {
      clearInterval(this.interval)
    }
  }
</script>

<style scoped>
  #max {
    width: 100%;
    height: 100%;
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
    background: linear-gradient(45deg, #FFFAFA, #FF0000);
    z-index: 1000;
    height: 50px;
    width: 100%;
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
    margin: 50px 20px 50px;
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
    width: 24%;
  }

  .aaa {
    width: 40%;
  }

  span {
    color: red;
    border-radius: 12px;
    background-color: rgba(255, 255, 0, 0.5);
  }

</style>
