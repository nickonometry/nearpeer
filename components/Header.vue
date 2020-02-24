<template>
  <v-app-bar fixed app class="white" flat>
    <nuxt-link
      tag="img"
      alt="NearPeer Logo"
      src="/images/nearpeer_logo.svg"
      to="/"
      style="cursor: pointer;"
      class="header-logo"
    ></nuxt-link>
    <v-spacer />
    <nuxt-link
      to="/higher-enrollment"
      class="navlink deep-purple--text text--darken-3"
    >Higher Enrollment</nuxt-link>
    <nuxt-link
      to="/student-success"
      class="navlink deep-purple--text text--darken-3"
    >Student Success</nuxt-link>
    <nuxt-link
      to="/what-is-near-peer"
      class="navlink deep-purple--text text--darken-3"
    >What is Nearpeer?</nuxt-link>
    <nuxt-link to="/about" class="navlink deep-purple--text text--darken-3">About</nuxt-link>
    <v-btn
      href="/contact"
      rounded
      depressed
      color="secondary"
      class="ml-3"
      aria-label="Contact us"
    >Contact Us</v-btn>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navlink {
  text-decoration: none;
  margin: 0 16px;
  height: calc(100% + 8px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.03em;
  border-top: 5px solid transparent;
  padding-bottom: 5px;
  &.active,
  &:hover {
    border-top: 5px solid #ff4081;
  }
}
.contact-link {
  padding: 6px 15px;
  font-size: 13px;
  border-radius: 20px;
  margin-left: 15px;
  text-decoration: none;
}
.header-logo {
  height: 30px;
}
</style>
