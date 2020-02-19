<template>
  <v-app>
    <v-app-bar fixed app class="white">
      <img src="https://via.placeholder.com/200x50" class="header-logo" alt="NearPeer Logo">
      <v-spacer />
      <nuxt-link to="/#" class="navlink deep-purple--text text--darken-3">
          Higher Enrollment
      </nuxt-link>
      <nuxt-link to="/#" class="navlink deep-purple--text text--darken-3">
          Student Success
      </nuxt-link>
      <nuxt-link to="/#" class="navlink deep-purple--text text--darken-3">
          What is NearPeer?
      </nuxt-link>
      <nuxt-link to="/#" class="navlink deep-purple--text text--darken-3">
          About
      </nuxt-link>
      <v-btn rounded depressed color="primary">Testing rounded button</v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      absolute
      :height="300"
      app
      class="white--text deep-purple darken-3 footer-area"
    >
      <div class="leftside">
        <img src="https://via.placeholder.com/130x80" class="footer-logo" alt="NearPeer Logo">
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


      <div class="copyrightline">Copyright {{ new Date().getFullYear() }} &copy; Nearpeer</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.navlink{
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
  &.active,&:hover{
    border-top: 5px solid #FF4081;
  }
}
.contact-link{
  padding: 6px 15px;
  font-size: 13px;
  border-radius: 20px;
  margin-left: 15px;
  text-decoration: none;
}

.footer-area{
  justify-content: space-between;
  align-items: flex-start;
  padding: 30px;
  .leftside{
    display: flex;
    align-items: flex-start;
    .footer-logo{
      padding-right:60px;
    }
    .footer-links{
      list-style: none;
      font-size: 13px;
      letter-spacing: 0.03em;
      margin-top: -7px;
      a{
        text-decoration: none;
        color: #fff;
      }
      li{
        padding: 3px 7px;
        margin: 7px 0;
        &:hover{
          background-color:#FF4081;
        }
      }
    }
  }
  .rightside{
    i:not(:last-child){
      padding:0 10px;
    }
    i:last-child{
      padding-left: 10px;
    }
  }
  .copyrightline{
    bottom: 30px;
    left: 30px;
    font-size: 11px;
    position: absolute;
  }
}
</style>
