<template>
  <v-app v-resize="onResize">
    <DrawerNav :drawer="drawer" v-if="isMobile" />
    <v-app-bar app>
      <Header :showNav="!isMobile" v-on:toggle-menu="toggleMenu()" />
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import DrawerNav from "../components/DrawerNav";

export default {
  components: {
    Header,
    Footer,
    DrawerNav
  },

  data() {
    return {
      isMobile: false,
      drawer: false
    };
  },

  mounted() {
    this.onResize();
  },

  methods: {
    onResize() {
      if (window.innerWidth < 956) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
        this.drawer = false;
      }
    },
    toggleMenu() {
      this.drawer = !this.drawer;
    }
  }
};
</script>
