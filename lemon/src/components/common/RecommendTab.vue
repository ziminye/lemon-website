<template>
  <div>
    <div class="recommend-tab">
      <div class="tab" v-for="(item,index) in titles" :class="{active: index==currentIndex}" @click="handleItem(index)">{{item}}</div>
        <!--<div class="tab item1" @click="handleItem1">热门职位</div>
        <div class="tab item2" @click="handleItem2">热门职位</div>-->
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
    export default {
        name: "RecommendTab",
        data() {
            return {
              titles: [
                  '热门职位',
                  '推荐职位'
              ],
              currentIndex: 0
            };
        },
        methods: {
            handleItem(index){
                this.currentIndex=index
                this.$emit("clickHot",index)
            }
        }
    }
</script>

<style scoped>
.recommend-tab{
  width: 300px;
  margin: 40px auto;
  display: flex;
}
.tab{
  width: 150px;
  height: 45px;
  border-radius: 5%;
  text-align: center;
  line-height: 45px;
  flex: 1;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
  .item1{
    background-color: #35A99D;
    color: white;
  }
  .item2{
    background-color: white;
    color: #35A99D;
  }
  .line{
    width: 70%;
    background-color: #35A99D;
    height: 1px;
    margin: 40px auto;
  }
  .active{
    background-color: #35A99D;
    color: white;
  }
</style>
