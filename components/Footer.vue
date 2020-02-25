<template>
  <div class="topbor">
    <v-footer
      absolute
      :height="315"
      app
      class="white--text deep-purple darken-3 footer-area"
      paddless
    >
      <div class="leftside">
        <img
          src="~assets/images/nearpeer_logo_tall_white.svg"
          class="footer-logo"
          alt="NearPeer Logo"
        />
        <ul class="footer-links">
          <!-- <li>
          <nuxt-link to="/higher-enrollment">Higher Enrollment</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/student-success">Student Success</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/what-is-near-peer">What is Nearpeer?</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About</nuxt-link>
          </li>-->
        </ul>
      </div>
      <div class="footer-bottom deep-purple darken-3">
        <div class="copyrightline">Copyright {{ new Date().getFullYear() }} Nearpeer, Inc.</div>
      </div>
    </v-footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.topbor {
  border-top: 1px solid #fff;
}
.footer-area {
  padding: 30px 45px;
  align-items: flex-start;
  justify-content: space-between;
  align-items: flex-start;
  // background-color: #292929 !important;

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
