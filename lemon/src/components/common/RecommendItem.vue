<template>
<el-row>
  <!--<el-col :span="6" :offset="4">
    <el-row>-->
      <div class="recommendItem item1">
        <el-col :span="18">
          <span class="name"><slot name="name"></slot></span>
          <span class="positionLabel"><slot name="positionLabel"></slot></span>
          <div class="position-div">
              <i class="el-icon-s-flag"></i>
          <span class="positionArea"><slot name="positionArea"></slot></span>
          </div>
          <div class="info-item">
          <span class="positionSalary"><slot name="positionSalary"></slot></span>
          <span class="positionDuration"><slot name="positionDuration"></slot></span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="img-container">

          </div>
        </el-col>
      </div>
    <!--</el-row>
  </el-col>-->
  <!--<el-col :span="7" :offset="2">
    <div class="recommendItem item2"></div>
  </el-col>-->
</el-row>
</template>

<script>
    export default {
        name: "RecommendItem"
    }
</script>

<style scoped>
.recommendItem{
  height: 100px;
  padding-left: 20px;
  padding-top: 10px;
  margin: 20px auto
}
  .item1{
    border: #35A99D solid 1px;
  }
  .item2{
    background-color: rgba(53, 169, 157, 0.5);
  }
  .name{
    font-size: medium;
    font-weight: bold;
  }
  .positionLabel{
    color: white;
    background-color: #35A99D;
  }
  .position-div{
    margin-top: 10px;
  }
  .info-item{
    margin-top: 10px;
  }
  .img-container{
    width: 80px;
    height: 80px;
    background: url(https://tse1-mm.cn.bing.net/th?id=OIP.SOJvRxSy8JVJEojhF_yqRgHaFA&w=274&h=185&c=7&o=5&pid=1.7) no-repeat;
    background-size: cover;

  }
  .recommendItem:hover{
    box-shadow: 0 4px 8px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    transform: translate(-2px,-2px);
  }
</style>
