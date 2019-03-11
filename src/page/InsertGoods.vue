<template>
  <div id="max">
    <div id="background"></div>
    <div id="content">
      <div id="head">
        <span @click="goBack">&lt;返回</span>
      </div>
      <div id="middle">
        图片<input type="file" /><br/>
        菜名<input type="text" v-model="name"/><br/>
        价格<input type="text" v-model="price"/><br/>
        类型<select name="goodsType" id="goodsType">
        <option value="1">主食</option>
        <option value="2">饮品</option>
        <option value="3">汤羹</option>
        <option value="4">炒菜</option>
        <option value="5">凉菜</option>
        <option value="6">烧烤</option>
      </select><br/>
        打折<select name="discount" id="discount">
        <option value="10">10折</option>
        <option value="9">9折</option>
        <option value="8">8折</option>
        <option value="7">7折</option>
        <option value="6">6折</option>
        <option value="5">5折</option>
        <option value="4">4折</option>
        <option value="3">3折</option>
        <option value="2">2折</option>
        <option value="1">1折</option>
      </select><br/>
        限购<input type="text" v-model="limit" placeholder="0代表不限购"/><br/>
        余量<input type="text" v-model="goodsNum"/><br/>
        描述<input type="text" v-model="describe"/><br/>
        <input type="button" value="提交" @click="goInsert()"/>
      </div>
    </div>
  </div>
</template>

<script>
  import {service} from "../js/api";
  import $ from 'jquery'

  export default {
    name: "InsertGoods",
    data(){
      return{
        photo:"aa",
        name:null,
        price:null,
        type:null,
        discount:null,
        limit:null,
        goodsNum:null,
        describe:null
      }
    },
    methods:{
      goInsert(){
        this.type=$("#goodsType").val()
        this.discount=$("#discount").val()
        service("post","/cook/addGoods",{
          goodsName:this.name,type:this.type,
          price:this.price,discount:this.discount,
          limit:this.limit,image:this.photo,
          num:this.goodsNum,describe: this.describe
        }).then(data=>{
          if(data===undefined){
            return
          }
          if(data.code!==200){
            alert(data.message)
          }
          if(data.code===200){
            alert("操作成功")
            window.location.href="/allMenu"
          }

        })
      },
      goBack(){
        window.location.href="/allMenu"
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
    background: linear-gradient(45rad,white,red);
    width: 100%;
    height: 50px;
    display: inline-block;
    text-align: left;
    line-height: 50px;
    padding-left: 25px;
  }
  input{
    margin-top: 5%;
  }
  input[type="text"]{
    height: 25px;
    width:50%;
  }
  select{
    margin-top: 5%;
    height: 25px;
    width:50%;
  }
  input[type="button"]{
    height: 25px;
    width:20%;
  }
  input[type="file"]{
    height: 25px;
    width:50%;
  }
  input:focus{
    outline: none;
  }
</style>
