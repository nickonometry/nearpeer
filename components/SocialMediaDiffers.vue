<template>
  <section>
    <div class="left">
      <h2>
        How is Nearpeer different
        <br />than social media?
      </h2>
      <img src="~assets/images/nearpeer_phone_set.png" width="390px" />
    </div>
    <div class="right">
      <div class="iconcomp">
        <img src="~assets/images/account-switch-outline.svg" width="45px" />
        <div class="comptext">
          <h3>Higher quality engagement</h3>
          <p>
            Nearpeer engages all students in ad-free environment,
            including the introverts.
          </p>
          <p>
            Social media leaves out the 75% of incoming students who
            behave like introverts.
          </p>
        </div>
      </div>
      <div class="iconcomp">
        <img src="~assets/images/check-underline-circle-outline.svg" width="45px" />
        <div class="comptext">
          <h3>Easy To Roll Out</h3>
          <p>
            We know your team is busy, so we do most of the work for you.
            Simple and effortless. Students create the content. Nearpeer
            moderates it to ensure a safe, high-quality experience.
          </p>

          <p>
            With social media, your team is responsible for the work
            of creating content.
          </p>
        </div>
      </div>
      <div class="iconcomp">
        <img src="~assets/images/finance.svg" width="45px" />
        <div class="comptext">
          <h3>Real, Measurable Results</h3>
          <p>
            Nearpeer delivers higher enrollment, persistence,
            and return on investment.
          </p>

          <p>Social media impact is often impossible to measure.</p>
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
  border-top: 1px solid #ddd;
  padding: 50px 0;
  background-color: #fff;
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  max-width: 950px;
  width: 100%;
  margin: 0 auto;
  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h2 {
      font-size: 30px;
      font-weight: bold;
      color: #000;
      padding-bottom: 50px;
      line-height: 30px;
    }
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
</style>
