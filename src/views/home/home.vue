<template>
  <div class="home">
    
    <full-page />
  </div>
</template>

<script>
import fullPage from "./fullPage";
export default {
  components: {
    fullPage
  },
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
.el-menu {
    /* position: fixed; */
  z-index: 999;
}
</style>