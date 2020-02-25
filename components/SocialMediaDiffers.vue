<template>
  <section>
    <div class="heading-container">
      <div class="heading">
        <h2>“Will I fit in?”</h2>
        <div>
          <img src="/images/sad-face.png" alt="Sad face emoticon" />
          <img src="/images/smiley-face.png" alt="Smiley face emoticon" />
        </div>
      </div>
      <p>
        …is students’ #1 priority in their decision to enroll.
        <br />Nearpeer addresses this need and delivers higher enrollment.
      </p>
    </div>
    <div class="sectioncontainer">
      <div class="left">
        <img src="~assets/images/nearpeer_phone_set.png" width="390px" alt />
      </div>
      <div class="right">
        <div class="iconcomp">
          <img src="~assets/images/account-switch-outline.svg" width="45px" alt />
          <div class="comptext">
            <h3>Designed for peer discovery</h3>
            <p>
              Nearpeer engages all students in an ad-free environment,
              including the introverts.
            </p>
            <p>In contrast, social media leaves out 75% of incoming students who behave like introverts.</p>
          </div>
        </div>
        <div class="iconcomp">
          <img src="~assets/images/check-underline-circle-outline.svg" width="45px" alt />
          <div class="comptext">
            <h3>
              Advanced algorithms foster
              human connection
            </h3>
            <p>Nearpeer’s multi-dimensional matching algorithms promote 1:1 peer relationships based on what students have in common: shared interests, academics, life experience, and more.</p>
          </div>
        </div>
        <div class="iconcomp">
          <img src="~assets/images/finance.svg" width="45px" alt />
          <div class="comptext">
            <h3>Guaranteed results</h3>
            <p>
              Nearpeer is focused on delivering you measurable enrollment lift, and we’ll guarantee it. As your partner, your goals are our goals.
              Source: Eduventures 2020.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
  .heading-container {
    max-width: 950px;
    margin: 48px auto;

    .heading {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    h2 {
      font-size: 60px;
      font-weight: bold;
      color: #4611a9;
      padding-bottom: 50px;
      line-height: 30px;
      margin: 0 24px 0 0;
      padding: 0;
    }

    p {
      font-size: 32px;
      line-height: 45px;
    }
  }

  .sectioncontainer {
    padding: 50px 0;
    background-color: #fff;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: space-between;
    max-width: 950px;
    width: 100%;
    margin: 0 auto;
    .left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 430px;
      .iconcomp {
        display: flex;
        align-items: flex-start;
        img {
          margin-right: 30px;
        }
        h2 {
          margin: 0;
          font-weight: bold;
        }
        p {
          font-size: 13px;
        }
      }
    }
  }
}

@media screen and (max-width: 980px) {
  section {
    padding: 24px;

    .heading-container {
      width: 100%;
      text-align: center;
      margin: 0 auto;

      .heading {
        justify-content: center;
        flex-wrap: wrap;

        h2 {
          margin: 0 0 16px 0;
          line-height: 64px;
          text-align: center;
          font-size: 48px;
        }
      }
    }

    .sectioncontainer {
      flex-wrap: wrap;
      justify-content: center;
      margin: 0;
      padding: 0;

      .left {
        margin-bottom: 16px;
      }
      .right {
        width: 100%;

        .iconcomp {
          width: 75%;
          margin: 16px auto;
        }
      }
    }
  }
}
</style>
