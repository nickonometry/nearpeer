<template>
  <v-app>
    <v-app-bar fixed app class="white">
      <img src="https://via.placeholder.com/200x50?text=NearPeer+Logo" class="logo" alt="NearPeer Logo">
      <v-spacer />
      <div class="navlink deep-purple--text text--darken-3 active">
        Higher Enrollment
      </div>
      <div class="navlink deep-purple--text text--darken-3">
        Student Success
      </div>
      <div class="navlink deep-purple--text text--darken-3">
        What is NearPeer?
      </div>
      <div class="navlink deep-purple--text text--darken-3">
        About
      </div>
      <div class="contact-link pink accent-2 white--text">
        Contact Us
      </div>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      fixed: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.navlink{
    margin: 0 16px;
    height: calc(100% + 8px);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.03em;
  &.active{
    border-top: 5px solid #FF4081;
  }
}
.contact-link{
  padding: 6px 15px;
  font-size: 13px;
  border-radius: 20px;
  margin-left: 15px;
}
</style>
