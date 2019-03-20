<template>
  <div id="max">
    <div id="background">
    </div>
    <div id="content">
      <div id="head">
        <div id="input">
          <div class="input"><input type="text" v-model="num" placeholder="请输入桌号" @blur="selectDesk"/><span>查询</span></div>
          <div class="input"><span @click="goAdd()">新增+</span></div>
        </div>
        <table cellspacing="0" align="center">
          <tr>
            <td class="a">序号</td>
            <td class="a">桌号</td>
            <td class="aaa">描述</td>
            <td class="aa">操作</td>
          </tr>
        </table>
      </div>
      <div id="desk">
        <table cellspacing="0" align="center">
          <tr v-for="(item,index) in list">
            <td class="a">{{index+1}}</td>
            <td class="a"><input class="inputOne" type="text" :value="item.deskNum" :id="'index'+index" disabled/></td>
            <td class="aaa"><input class="inputTwo" type="text" :value="item.describe" :id="'inde'+index" disabled/>
            </td>
            <td class="aa"><span @click="updateDesk('index'+index,'inde'+index,'ind'+index,item.id)"
                                 :id="'ind'+index">修改</span>
              <span @click="deleteDesk(item.id)">删除</span></td>
          </tr>
        </table>
        <div id="divBottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {service} from "../../js/api";
  import $ from 'jquery'

  export default {
    name: "Desk",
    data() {
      return {
        list: null,
        num: null
      }
    },
    mounted() {
      this.selectDesk()
    },
    methods: {
      selectDesk() {
        service("get", "/manager/select/desk", {num: this.num}).then(
          data => {
            if (data.code !== 200) {
              alert(data.message)
              return
            }
            if (data.code === 200) {
              this.list = data.data
              return
            }
          }
        )
      },
      goAdd(){
        window.location.href="/addDesk"
      },
      deleteDesk(id) {
        if (confirm("确认删除吗？")) {
          service("post", "/manager/delete/desk", {
            id: id
          }).then(data => {
            if (data.code !== 200) {
              alert(data.message)
              return
            }
            if (data.code === 200) {
              alert("删除成功！")
              window.location.href = "/desk"
              return
            }
          })
        }
      },
      updateDesk(idOne, idTwo, idThree, id) {
        if ($("#" + idThree).text() === "修改") {
          $("#" + idOne).removeAttr("disabled")
          $("#" + idTwo).removeAttr("disabled")
          $("#" + idThree).text("完成");
          $("#" + idOne).focus()
        }
        else {
          service("post", "/manager/update/desk", {
            num: $("#" + idOne).val(), describe: $("#" + idTwo).val(), id: id
          }).then(
            data => {
              if (data.code !== 200) {
                alert(data.message)
                return
              }
              if (data.code === 200) {
                $("#" + idOne).attr("disabled", true)
                $("#" + idTwo).attr("disabled", true)
                $("#" + idThree).text("修改");
                alert("修改成功！")
              }
            }
          )
        }
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

  #head {
    background: linear-gradient(45deg, #FF0000, #FFFAFA);
    width: 100%;
    height: 80px;
    line-height: 50px;
    font-family: 仿宋;
    font-size: 20px;
    position: fixed;
    z-index: 1000;
  }
  .input {
    display: inline-block;
    float: left;
    width: 50%;
  }
.input input{
  background: transparent;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 0.5px black solid;
  width: 60%;
}
.input span{
  border-radius: 25px;
  font-size: 20px;
  margin-left: 5%;
  background-color: crimson;
  padding: 2%;
}
  #input {
    height: 50px;
    width: 100%;
    display: inline-block;
    line-height: 50px;
    text-align: center;
  }
  #head table{
    margin-top: -20px;
  }
  #head td{
    line-height: 30px;
    height: 30px;
  }
  #desk {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding-top: 80px;
  }
  table {
    text-align: center;
    width: 90%;
  }

  #desk td {
    height: 35px;
  }

  td input {
    background: transparent;
    border: none;
  }

  input:focus {
    outline: none;
  }

  .inputOne {
    text-align: center;
    width: 100%;
  }

  .inputTwo {
    text-align: left;
    width: 100%;
  }

  td span {
    border-radius: 25px;
    background-color: darkgray;
    padding: 2% ;
  }

  .a {
    width: 15%;
  }

  .aa {
    width: 25%;
  }

  .aaa {
    width: 35%;
  }

  #divBottom {
    height: 150px;
  }
</style>
