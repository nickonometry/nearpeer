<template>
  <section class="enrollment-rate">
    <div class="enrollment-rate__grid">
      <p class="callout">Nearpeer users are over 6 times more likely to enroll</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        adipisci facilis exercitationem praesentium sequi tempora, laboriosam
        maxime unde quas aut soluta, placeat vel. Autem dolor minus
        accusantium inventore neque. Obcaecati!
      </p>
      <img src="https://via.placeholder.com/400x400" />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.enrollment-rate {
  padding: 100px;

  &__grid {
    display: grid;
    grid-template-columns: 2fr 4fr 4fr;
    gap: 64px;

    .callout {
      font-size: 32px;
      color: #4611a9;
    }

    img {
      justify-self: center;
      width: 100%;
    }
  }
}
</style>
