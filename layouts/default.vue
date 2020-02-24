<template>
  <v-app>
    <DrawerNav />
    <Header />
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
  }
};
</script>
