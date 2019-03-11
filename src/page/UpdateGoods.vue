<template>
  <div id="max">
    <div id="background"></div>
    <div id="content">
      <div id="head">
        <span @click="goBack">&lt;返回</span>
      </div>
      <div id="middle">
        图片<input type="file"/><br/>
        菜名<input type="text" v-model="name"/><br/>
        价格<input type="text" v-model="price"/><br/>
        类型<select name="goodsType" id="goodsType">
        <option value="1" id="type1">主食</option>
        <option value="2" id="type2">饮品</option>
        <option value="3" id="type3">汤羹</option>
        <option value="4" id="type4">炒菜</option>
        <option value="5" id="type5">凉菜</option>
        <option value="6" id="type6">烧烤</option>
      </select><br/>
        打折<select name="discount" id="discount">
        <option value="10" id="discount10">10折</option>
        <option value="9" id="discount9">9折</option>
        <option value="8" id="discount8">8折</option>
        <option value="7" id="discount7">7折</option>
        <option value="6" id="discount6">6折</option>
        <option value="5" id="discount5">5折</option>
        <option value="4" id="discount4">4折</option>
        <option value="3" id="discount3">3折</option>
        <option value="2" id="discount2">2折</option>
        <option value="1" id="discount1">1折</option>
      </select><br/>
        限购<input type="text" v-model="limit" placeholder="0代表不限购"/><br/>
        余量<input type="text" v-model="goodsNum"/><br/>
        描述<input type="text" v-model="describe"/><br/>
        <input type="button" value="提交" @click="goChange()"/>
      </div>
    </div>
  </div>
</template>

<script>
  import {service} from "../js/api";
  import $ from 'jquery'

  export default {
    name: "UpdateGoods",
    data() {
      return {
        photo: null,
        name: null,
        price: null,
        type: null,
        discount: null,
        limit: null,
        goodsNum: null,
        describe: null,
        goodsId:null
      }
    },
    mounted() {
      this.goGoodsInfo()
    },
    methods: {
      goChange() {
        this.type = $("#goodsType").val()
        this.discount = $("#discount").val()
        service("post", "/cook/updateGoods", {goodsId:this.goodsId,
          goodsName: this.name, type: this.type,
          price: this.price, discount: this.discount,
          limit: this.limit, image: this.photo,
          num: this.goodsNum, describe: this.describe
        }).then(data => {
          if (data === undefined) {
            return
          }
          if (data.code !== 200) {
            alert(data.message)
          }
          if (data.code === 200) {
            alert("操作成功")
            window.location.href = "/allMenu"
          }

        })
      },
      goBack() {
        window.location.href = "/allMenu"
      },
      goGoodsInfo() {
        this.goodsId=this.$route.query.goodsId;
        service("get", "/cook/select/goodsById", {goodsId:this.goodsId}).then(
          data => {
            if (data === undefined) {
              alert("请求失败，稍后再试！")
              window.location.href = '/allMenu'
              return
            }
            if (data.code !== 200) {
              alert(data.message)
              window.location.href = '/allMenu'
              return
            }
            if (data.code === 200) {
              this.name = data.data.name;
              this.type = data.data.type;
              this.price = data.data.price;
              this.discount = data.data.discount;
              this.photo = data.data.image;
              this.limit = data.data.limit;
              this.goodsNum = data.data.goodsNum;
              this.describe = data.data.describe;
              let type='#type'+this.type
              $(type).attr("selected",true)
              let discount="#discount"+this.discount
              $(discount).attr("selected",true);
            }
          }
        )
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
    background: linear-gradient(45rad, white, red);
    width: 100%;
    height: 50px;
    display: inline-block;
    text-align: left;
    line-height: 50px;
    padding-left: 25px;
  }

  input {
    margin-top: 5%;
  }

  input[type="text"] {
    height: 25px;
    width: 50%;
  }

  select {
    margin-top: 5%;
    height: 25px;
    width: 50%;
  }

  input[type="button"] {
    height: 25px;
    width: 20%;
  }

  input[type="file"] {
    height: 25px;
    width: 50%;
  }

  input:focus {
    outline: none;
  }
</style>
