<template>
  <v-app v-resize="onResize">
    <v-navigation-drawer v-model="drawer" v-if="isMobile" app right temporary>
      <v-list nav class="py-0">
        <v-divider></v-divider>

        <v-list-item v-for="item in items" :key="item.title" link nuxt :to="item.url">
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

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

export default {
  components: {
    Header,
    Footer
  },

  data() {
    return {
      isMobile: false,
      drawer: false,
      items: [
        { title: "Home", url: "/" },
        { title: "Higher Enrollment", url: "/higher-enrollment" },
        { title: "Student Success", url: "/student-success" },
        { title: "What is Nearpeer?", url: "/what-is-near-peer" },
        { title: "About", url: "/about" }
      ]
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
<style lang="scss" scoped>
.v-list-item--link:before {
  display: none;
}
.v-list-item--active {
  background-color: #ff4081;
  color: #fff;
  border-radius: 0;
}
.v-list--nav {
  padding-left: 0px;
  padding-right: 0px;
}
</style>
