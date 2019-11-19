<template>
    <footer>
      <div id="footerBar">
        <span id="Intr">青柠-专注为大学生提供可靠地实习机会</span>
        <span id="aboutUs"><router-link to="./">关于我们</router-link></span>
        <span id="connUs"><router-link to="./">联系我们</router-link></span>
      </div>
      <address>©************公司88888</address>
    </footer>
</template>

<script>
    export default {
        name: "CopyRightBar",
        data: function () {
            return {}
        }
    }
</script>

<style scoped>
  footer{
    width:100%;
    border-top: 2px solid #95a5a6;
    text-align: center;
  }
  #footerBar{
    margin-top: 20px;
  }
  span,address{
    margin:10px;
  }
  address{
    font-size: 15px;
    color:#ecf0f1;
  }
  a{
    text-decoration: none;
  }

  @media screen and (max-width: 500px) {
    #Intr{
      display: block;
    }
  }
</style>
