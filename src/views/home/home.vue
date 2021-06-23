<template>
  <div class="contain">
    <div class="head">
      <img class="default_img"
           :src="defaultImg" />
      <el-input v-model="input"
                placeholder="请输入内容"></el-input>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup () {
    const state = reactive({
      defaultImg: require('../../assets/default.jpg'),
      input: ""
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