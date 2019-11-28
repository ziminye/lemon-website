<template>
    <div class="container">
      <swiper :swiper-images="swiperImages"></swiper>
      <home-search></home-search>
      <logo-container></logo-container>
      <recommend-tab @clickHot="clickHot"></recommend-tab>
      <el-row>
        <el-col :span="6" :offset="5">
          <recommend-item>
            <template slot="name">前端实习生</template>
            <template slot="positionLabel">急</template>
            <template slot="positionArea">北京</template>
            <template slot="positionSalary">6000/月</template>
            <template slot="positionDuration">&nbsp;&nbsp;&nbsp;3个月</template>
          </recommend-item>
        </el-col>
        <el-col :span="6" :offset="2">
          <recommend-item>
            <template slot="name">前端实习生</template>
            <template slot="positionLabel">急</template>
            <template slot="positionArea">北京</template>
            <template slot="positionSalary">6000/月</template>
            <template slot="positionDuration">&nbsp;&nbsp;&nbsp;3个月</template>
          </recommend-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="6" :offset="5">
          <recommend-item>
            <template slot="name">前端实习生</template>
            <template slot="positionLabel">急</template>
            <template slot="positionArea">北京</template>
            <template slot="positionSalary">6000/月</template>
            <template slot="positionDuration">&nbsp;&nbsp;&nbsp;3个月</template>
          </recommend-item>
        </el-col>
        <el-col :span="6" :offset="2">
          <recommend-item>
            <template slot="name">前端实习生</template>
            <template slot="positionLabel">急</template>
            <template slot="positionArea">北京</template>
            <template slot="positionSalary">6000/月</template>
            <template slot="positionDuration">&nbsp;&nbsp;&nbsp;3个月</template>
          </recommend-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="6" :offset="5">
          <recommend-item>
            <template slot="name">前端实习生</template>
            <template slot="positionLabel">急</template>
            <template slot="positionArea">北京</template>
            <template slot="positionSalary">6000/月</template>
            <template slot="positionDuration">&nbsp;&nbsp;&nbsp;3个月</template>
          </recommend-item>
        </el-col>
        <el-col :span="6" :offset="2">
          <recommend-item>
            <template slot="name">前端实习生</template>
            <template slot="positionLabel">急</template>
            <template slot="positionArea">北京</template>
            <template slot="positionSalary">6000/月</template>
            <template slot="positionDuration">&nbsp;&nbsp;&nbsp;3个月</template>
          </recommend-item>
        </el-col>
      </el-row>
      <copy-right-bar></copy-right-bar>
    </div>
</template>

<script>
  import Swiper from '../../components/common/Swiper'
  import HomeSearch from './childComps/HomeSearch'
  import LogoContainer from './childComps/LogoContainer'
  import RecommendTab from '../../components/common/RecommendTab'
  import RecommendItem from '../../components/common/RecommendItem'
  import CopyRightBar from '../../components/common/CopyRightBar'
    export default {
        name: "index",
        data: function () {
            return {
                swiperImages:[
                    { image: 'https://tse1-mm.cn.bing.net/th?id=OIP.SOJvRxSy8JVJEojhF_yqRgHaFA&w=274&h=185&c=7&o=5&pid=1.7  '},
                    { image: 'https://tse4-mm.cn.bing.net/th?id=OIP.OAUl6PlwWAK-AScQ8XAcJgHaEn&w=300&h=187&c=7&o=5&pid=1.7'},
                    { image: 'https://tse4-mm.cn.bing.net/th?id=OIP.jUNSff7IYV0gTvlZxA8C-wHaE7&w=300&h=198&c=7&o=5&pid=1.7'},
                    { image: 'https://tse4-mm.cn.bing.net/th?id=OIP.jUNSff7IYV0gTvlZxA8C-wHaE7&w=300&h=198&c=7&o=5&pid=1.7'},
                ]
            }
        },
        components: {
            Swiper,
            HomeSearch,
            LogoContainer,
            RecommendTab,
            RecommendItem,
            CopyRightBar
        },
        methods:{
            clickHot(index){
                console.log("点击啦"+index)
            }
        }
    }
</script>

<style scoped>
.recommend-position{

}
.container{
}
</style>
