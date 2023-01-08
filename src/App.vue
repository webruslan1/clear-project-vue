<template>
  <div id="app">
    <div class="header-place"></div>
    <Header />
    <router-view></router-view>
    <Footer />
    <notifications classes="notif" />
  </div>
</template>


<script>
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
export default {
  components: {
    Header,
    Footer,
  },

  mounted(){
    console.log(this.$root.cards)
  }
};
</script>


<style lang="scss">
#app {
  position: relative;
  overflow-x: hidden;
}

.header-place{
  height: 200px;
}

.container {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
</style>
