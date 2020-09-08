<template>
  <div>
    <HeroImage />
    <CovidNotice />
    <v-divider></v-divider>
    <ImageCarousel />
    <v-divider></v-divider>

    <EnrollmentStats />
    <v-divider></v-divider>

    <SocialMediaDiffers />
    <v-divider></v-divider>

    <StrategicPartnership />
    <v-divider></v-divider>

    <CallToAction
      link="/contact"
      buttonText="Contact Us"
    >Find out how Nearpeer can increase your incoming class</CallToAction>
  </div>
</template>

<script>
import HeroImage from "../components/HeroImage";
import CovidNotice from "../components/CovidNotice";
import CallToAction from "../components/CallToAction";
import ImageCarousel from "../components/ImageCarousel";
import StrategicPartnership from "../components/StrategicPartnership";
import SocialMediaDiffers from "../components/SocialMediaDiffers";
import EnrollmentStats from "../components/EnrollmentStats";

export default {
  components: {
    HeroImage,
    CovidNotice,
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
