<template>
  <el-container>
    <el-header>
<!--      80% 容器  -->
      <div class="contain">
<!--        logo+定位（待实现） -->
        <div id="together">
          <div id="myLOGO">
<!--              <img id="logo" src="">-->
          </div>
          <div id="position">
            <el-dropdown trigger="click" >
              <span class="el-dropdown-link" id="positionLogo">
                <i class="el-icon-position"></i>定位
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item class="menuItem" v-for="(pro,index) in provinces" :key="index">{{pro}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>

<!--        电脑端、平板显示导航栏 -->
        <ul id="computer">
          <li v-for="(tab,index) in tabs"><router-link :to="tabs[index].href" class="nav_bar_item">{{tab.value}}</router-link></li>
        </ul>

<!--        登录、注册按钮组 -->
        <div id="btnGroup">
          <button @click="toLogin">登录</button>
          <button @click="toRegister" id="btnRegister">注册</button>
        </div>

<!--        手机端显示 （变下拉菜单) -->
        <el-dropdown trigger="click" id="menu">
            <span class="el-dropdown-link">
              <img src="../../assets/Menu.svg" style="width: 30px;">
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="menuItem" v-for="(tab,index) in phoneTabs" :key="index"><router-link :to="tab.href">{{tab.value}}</router-link></el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
  </el-container>
</template>

<script>
    export default {
        name: "NavBar",
        data: function () {
            return {
              //电脑端导航数据
              tabs:[
                {href:'./',value:'首页'},
                {href:'./searchJob',value:'找实习'},
                {href:'./home',value:'发布职位'},
                {href:'./home',value:'秋招'},
                {href:'./home',value:'精品活动'},
                {href:'./profile',value:'我的'},

              ],

              //手机端导航菜单数据
              phoneTabs:[
                {href:'./',value:'首页'},
                {href:'./',value:'找实习'},
                {href:'./',value:'发布职位'},
                {href:'./',value:'秋招'},
                {href:'./',value:'精品活动'},
                {href:'./',value:'我的'},
                {href:'./login',value:'登录'},
                {href:'./register',value:'注册'}
              ],

              //定位数据
              //待实现
              provinces:[
                "北京",
                "湖南省",
                "湖北省",
                "福建省",
                "天津市"
              ]
            }
        },
        methods:{
          toLogin(){
            console.log("跳到登录");
          },
          toRegister(){
            console.log("跳到注册");
          }
        }
    }
</script>

<style scoped>

  *{
    margin: 0;
    padding: 0;
  }
  a{
    color: #ffffff;
    text-decoration: none;
    cursor: pointer;
  }
  .nav_bar_item{
    color: #ffffff;
    font-size: 18px;
    font-weight: normal;
  }
  li{
    list-style: none;
  }
  .contain{
    width: 80%;
    text-align: center;
    overflow: auto;
    margin: 0 auto;
  }
  .el-header {
    color: #333;
    line-height: 60px;
    overflow: hidden;
    background-color: #35A99D;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #ffffff;
  }

  /*Logo*/
  #together{
    float: left;
  }
  #myLOGO{
    width: 80px;
    height: 60px;
    float: left;
  }
  #logo{
    width: 100%;
    height: 60px;
  }
  #positionLogo{
    color: #ffffff;
  }

  /*导航栏*/
  #computer{
    float: left;
    margin-left:30px;
  }

  #computer li{
    float: left;
    font-size: 18px;
    margin-left: 30px;
  }
  #computer li:nth-child(1){
    margin-left: 10px;
  }

  /*定位样式*/
  #position{
    font-size: 12px;
    float: left;
    margin-top: 10px;
  }

  /*按钮样式*/
  #btnGroup{
    float: right;
  }
  button{
    width: 50px;
    padding: 10px;
    border: 1px solid #C4C4C4;
    font-size: 14px;
    background-color: transparent;
    color: #C4C4C4;
  }
  #btnRegister{
    background-color: rgba(94, 94, 94, 0.59);
    color: white;
  }
  /*导航栏样式*/
  #menu{
    display: none;
    margin-right: 20px;
    margin-top: 10px;
  }
  .menuItem{
    width: 100px;
    text-align: center;
  }
  .menuItem:hover{
    background-color: #eee;
    cursor: pointer;
  }
  @media screen and (max-width: 996px){
    .contain{
      width: 90%;
    }
    #iPhone{
      display: none;
    }
  }
  @media screen and (max-width: 856px){
    .contain{
      width: 100%;
    }
    #iPhone{
      display: none;
    }
  }
  @media screen and (max-width: 766px){
    .el-header{
      overflow: visible;
    }
    #together{
      margin-left: 10px;
    }
    /*导航栏文字、按钮隐藏*/
    #computer, #btnGroup{
      display: none;
    }
    #menu{
      display: block;
      float: right;
    }

  }
</style>
