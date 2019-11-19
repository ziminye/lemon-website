<template>
  <swiper>
    <swiper-item v-for="(item,index) in swiperImages" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
    import { Swiper, SwiperItem} from '../../../components/common/swiper'
    export default {
        name: "IndexSwiper",
        components: {
            Swiper,
            SwiperItem
        },
        props:{
            swiperImages:{
                type: Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>

</style>
