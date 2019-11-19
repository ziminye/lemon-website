<template>
  <div style="margin-top: 18px;">
    <el-input placeholder="请输入职位名称或者公司名称" v-model="input3" class="input-with-select">
      <el-select v-model="select" slot="prepend" placeholder="请选择">
        <el-option label="职位名称" value="1"></el-option>
        <el-option label="公司名称" value="2"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                input3: '',
                select: ''
            }
        }
    }
</script>
<style scoped>
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
