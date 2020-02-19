<template>
  <v-footer
    absolute
    :height="300"
    app
    class="white--text deep-purple darken-3 footer-area"
  >
    <div class="leftside">
      <img
        src="https://via.placeholder.com/130x80"
        class="footer-logo"
        alt="NearPeer Logo"
      />
      <ul class="footer-links">
        <nuxt-link to="/#">
          <li>Higher Enrollment</li>
        </nuxt-link>
        <nuxt-link to="/#">
          <li>Student Success</li>
        </nuxt-link>
        <nuxt-link to="/#">
          <li>What is Nearpeer?</li>
        </nuxt-link>
        <nuxt-link to="/#">
          <li>About</li>
        </nuxt-link>
      </ul>
    </div>
    <div class="rightside">
      <v-icon color="white" size="24px">fab fa-facebook-f</v-icon>
      <v-icon color="white" size="24px">fab fa-instagram</v-icon>
    </div>

    <div class="copyrightline">
      Copyright {{ new Date().getFullYear() }} &copy; Nearpeer
    </div>
  </v-footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer-area {
  justify-content: space-between;
  align-items: flex-start;
  padding: 30px;
  .leftside {
    display: flex;
    align-items: flex-start;
    .footer-logo {
      padding-right: 60px;
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
  .rightside {
    i:not(:last-child) {
      padding: 0 10px;
    }
    i:last-child {
      padding-left: 10px;
    }
  }
  .copyrightline {
    bottom: 30px;
    left: 30px;
    font-size: 11px;
    position: absolute;
  }
}
</style>
