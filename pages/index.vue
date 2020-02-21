<template>
  <div>
    <HeroImage />
    <ImageCarousel />

    <EnrollmentStats />
    <SocialMediaDiffers />
    <StrategicPartnership />
    <CallToAction link="/contact" buttonText="Contact Us">
      Find out how Nearpeer can increase
      <br />your incoming class
    </CallToAction>
  </div>
</template>

<script>
import HeroImage from "../components/HeroImage";
import CallToAction from "../components/CallToAction";
import ImageCarousel from "../components/ImageCarousel";
import StrategicPartnership from "../components/StrategicPartnership";
import SocialMediaDiffers from "../components/SocialMediaDiffers";
import EnrollmentStats from "../components/EnrollmentStats";

export default {
  components: {
    HeroImage,
    CallToAction,
    ImageCarousel,
    StrategicPartnership,
    SocialMediaDiffers,
    EnrollmentStats
  }
};
</script>

<style lang="scss" scoped>
</style>
