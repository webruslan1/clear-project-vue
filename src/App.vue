<template>
  <div id="app">
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
}

.container {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
</style>
