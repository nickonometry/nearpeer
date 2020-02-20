<template>
  <v-footer absolute :height="300" app class="white--text deep-purple darken-3 footer-area">
    <div class="leftside">
      <img
        src="~assets/images/nearpeer_logo_tall_white.svg"
        class="footer-logo"
        alt="NearPeer Logo"
      />
      <ul class="footer-links">
        <nuxt-link to="/higher-enrollment">
          <li>Higher Enrollment</li>
        </nuxt-link>
        <nuxt-link to="/student-success">
          <li>Student Success</li>
        </nuxt-link>
        <nuxt-link to="/what-is-near-peer">
          <li>What is Nearpeer?</li>
        </nuxt-link>
        <nuxt-link to="/about">
          <li>About</li>
        </nuxt-link>
      </ul>
    </div>
    <div class="rightside">
      <v-btn class="ma-2" text icon color="white" href="https://www.facebook.com">
        <v-icon size="24px">fab fa-facebook-f</v-icon>
      </v-btn>
      <v-btn class="ma-2" text icon color="white" href="https://www.instagram.com">
        <v-icon size="24px">fab fa-instagram</v-icon>
      </v-btn>
    </div>

    <div class="copyrightline">Copyright {{ new Date().getFullYear() }} &copy; Nearpeer</div>
  </v-footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer-area {
  justify-content: space-between;
  align-items: flex-start;
  padding: 30px 45px;
  .leftside {
    display: flex;
    align-items: flex-start;
    .footer-logo {
      padding-right: 60px;
      height: 90px;
    }
    .footer-links {
      list-style: none;
      font-size: 13px;
      letter-spacing: 0.03em;
      margin-top: -7px;
      a {
        text-decoration: none;
        color: #fff;
      }
      li {
        padding: 3px 7px;
        margin: 7px 0;
        &:hover {
          background-color: #ff4081;
        }
      }
    }
  }
  .copyrightline {
    bottom: 45px;
    left: 45px;
    font-size: 11px;
    position: absolute;
  }
}
</style>
