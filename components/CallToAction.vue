<template>
  <v-footer absolute :height="315" app class="white--text footer-area" paddless>
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
    <div class="footer-bottom grey darken-4">
      <div class="copyrightline">Copyright {{ new Date().getFullYear() }} &copy; Nearpeer</div>
    </div>
  </v-footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer-area {
  padding: 30px 45px;
  align-items: flex-start;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #292929;

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
  .footer-bottom {
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0 45px;
    font-size: 11px;
    position: absolute;
    height: 68px;
    display: flex;
    align-items: center;
  }
}
</style>
