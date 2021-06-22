<template>
  <div class="contain">
    <img class="default_img"
         :src="defaultImg" />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup () {
    const state = reactive({
      defaultImg: require('../../assets/default.jpg')
    })

    return {
      ...toRefs(state)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./home";
</style>