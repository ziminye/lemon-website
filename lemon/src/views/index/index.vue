<template>
    <div>
      <index-swiper :swiperImages="swiperImages"></index-swiper>
      <home-search></home-search>
      <logo-container></logo-container>
    </div>
</template>

<script>
  import IndexSwiper from './childComps/IndexSwiper'
  import HomeSearch from './childComps/HomeSearch'
  import LogoContainer from './childComps/LogoContainer'
    export default {
        name: "index",
        data: function () {
            return {
                swiperImages:[
                    { image: 'https://tse2-mm.cn.bing.net/th?id=OIP.C6Tr7008xX2sOlER8YCsbQHaFc&w=275&h=198&c=7&o=5&pid=1.7'},
                    { image: 'https://tse4-mm.cn.bing.net/th?id=OIP.OAUl6PlwWAK-AScQ8XAcJgHaEn&w=300&h=187&c=7&o=5&pid=1.7'},
                    { image: 'https://tse4-mm.cn.bing.net/th?id=OIP.jUNSff7IYV0gTvlZxA8C-wHaE7&w=300&h=198&c=7&o=5&pid=1.7'},
                    { image: 'https://tse4-mm.cn.bing.net/th?id=OIP.jUNSff7IYV0gTvlZxA8C-wHaE7&w=300&h=198&c=7&o=5&pid=1.7'},
                ]
            }
        },
        components: {
            IndexSwiper,
            HomeSearch,
            LogoContainer
        }
    }
</script>

<style scoped>

</style>
