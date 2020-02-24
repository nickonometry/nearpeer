<template>
  <v-app>
    <DrawerNav />
    <v-app-bar app>
      <Header />
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
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
