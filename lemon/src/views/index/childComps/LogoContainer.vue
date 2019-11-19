<template>
  <div class="logo-container">
<!--找了很久的bug是因为把(item,index)的小括号写成了大括号-->
<!--父子组件的传值没用错 会直接把在这里绑定的值去props里面找对应的值-->
      <div v-for="(item,index) in itemContainer" class="logo-container-item">
        <logo-item :key="index" :itemUrl="item.itemUrl"></logo-item>
      </div>
  </div>
</template>

<script>
    import LogoItem from '../../../components/common/LogoItem'
    export default {
        name: "LogoContainer",
        data(){
            return {
                itemContainer: [
                    { itemUrl: 'https://tse2-mm.cn.bing.net/th?id=OIP.C6Tr7008xX2sOlER8YCsbQHaFc&w=275&h=198&c=7&o=5&pid=1.7' },
                    { itemUrl: 'https://tse2-mm.cn.bing.net/th?id=OIP.C6Tr7008xX2sOlER8YCsbQHaFc&w=275&h=198&c=7&o=5&pid=1.7' },
                    { itemUrl: 'https://tse2-mm.cn.bing.net/th?id=OIP.C6Tr7008xX2sOlER8YCsbQHaFc&w=275&h=198&c=7&o=5&pid=1.7' },
                    { itemUrl: 'https://tse2-mm.cn.bing.net/th?id=OIP.C6Tr7008xX2sOlER8YCsbQHaFc&w=275&h=198&c=7&o=5&pid=1.7' }
                ]

            }
        },
        components: {
            LogoItem
        }
    }
</script>

<style scoped>
.logo-container{
  margin: auto;
  margin-top: 20px;
  width: 30%;
  display: flex;
}
.logo-container-item {
  flex: 1;
}
</style>
