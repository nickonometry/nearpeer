<template>
  <div>
    <div class="coming-soon">
      <img src="/images/nearpeer_logo.svg" alt="Nearpeer Logo - New website coming soon!" />
      <h1>New website coming soon</h1>
    </div>
  </div>
</template>

<script>
export default {
  layout: "comingsoon"
};
</script>

<style lang="scss" scoped>
.coming-soon {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    max-width: 400px;
    margin-bottom: 24px;
  }

  h1 {
    color: #4611a9;
    font-weight: bold;
  }
}
</style>
