<template>
<div class="demo-image">
    <el-image
      style="width: 100px; height: 100px"
      :src="itemUrl"
      fit="fit"></el-image>
  </div>
</template>

<script>
    export default {
        name: 'RecommedLogo',
        data() {
            return {

            }
        },
        props: {
            itemUrl:{
                type: String,
                default(){
                    return ''
                }
            }
        }
    }
</script>

<style scoped>
  .demo-image{
  }
</style>
