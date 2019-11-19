<template>
  <el-row class="search-row">
    <el-col :span="8" :offset="8">
      <div class="grid-content">
      <search-select class="search-select"></search-select>
      </div>
    </el-col>
  </el-row>

</template>

<script>
  import SearchSelect from '../../../components/common/SearchSelect'
    export default {
        name: "HomeSearch",
        components: {
            SearchSelect
        },
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
.search-select{
  width: 100%;
}
</style>
