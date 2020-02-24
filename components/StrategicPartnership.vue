<template>
  <section class="white">
    <img src="/images/2019_RNL_Logo.svg" width="120px" alt="Ruffalo Noel Levitz logo" />
    <img src="/images/+.svg" width="20px" style alt />
    <img src="/images/nearpeer_logo_tall.svg" width="120px" alt="Nearpeer logo" />
    <div class="stratparttext">
      <h2>Strategic Partnership</h2>
      <p>
        “Our partnership with Nearpeer helps our campus partners
        <br />harness the power of peer influence to increase enrollment.”
      </p>
      <span>- Todd Abbott, SVP at RNL</span>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
  height: 340px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img:nth-child(2) {
    margin: 12px;
  }
  .stratparttext {
    margin-left: 50px;
    h2 {
      font-size: 30px;
      font-weight: bold;
      color: #000;
      padding-bottom: 15px;
      line-height: 30px;
    }
    p {
      font-weight: bold;
      font-size: 13px;
      font-style: italic;
      letter-spacing: 0.05em;
      margin-bottom: 3px;
    }
    span {
      color: #ff4081;
      font-weight: bold;
      font-size: 13px;
    }
  }
}
</style>
