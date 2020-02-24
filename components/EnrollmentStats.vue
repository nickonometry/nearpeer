<template>
  <section class="enrollment-rate">
    <div class="enrollment-rate__grid">
      <h2>
        Nearpeer users are over
        <span>6 times</span> more likely to
        <span>enroll</span>
      </h2>
      <p>Measurement based on 2019 data from over 5,000 deposited students at a Nearpeer partner institution, and measured by comparing Fall 2019 enrollment status of Nearpeer users vs. non-users after controlling for income level (deposit waiver), state residency, gender, race (white/non-white), student orientation attendance, and more.</p>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 456 445"
        style="enable-background:new 0 0 456 445;"
        xml:space="preserve"
      >
        <g id="backImageBubble" transform="translate(67.281 6.616)" class="st0">
          <circle id="Oval_Copy_5-2" class="st7" cx="94.5" cy="113.9" r="81.9" />
          <g>
            <defs>
              <circle id="SVGID_1_" cx="94.5" cy="113.9" r="81.9" />
            </defs>
            <clipPath id="SVGID_2_">
              <use xlink:href="#SVGID_1_" style="overflow:visible;" />
            </clipPath>
            <g id="Group_20-2" class="st2">
              <image
                style="overflow:visible;enable-background:new    ;"
                width="1024"
                height="647"
                id="Bitmap"
                xlink:href="~assets/images/B55F42E8.jpg"
                transform="matrix(0.3457 0 0 0.3457 -55.5095 -18.7008)"
              />
            </g>
          </g>
        </g>
        <circle id="upperRightPinkBubble" class="st1" cx="373.5" cy="94.4" r="62.5" />
        <circle id="lowerPinkBubble" class="st1" cx="253.7" cy="397.9" r="28" />
        <circle id="purpleBubble" class="st3" cx="63.1" cy="155.2" r="50" />
        <g id="lowerImageBubble" transform="translate(34.512 233.225)">
          <circle id="Oval_Copy_2-2" class="st7" cx="94.5" cy="113.9" r="81.6" />
          <g>
            <defs>
              <circle id="SVGID_3_" cx="94.5" cy="113.9" r="81.6" />
            </defs>
            <clipPath id="SVGID_4_">
              <use xlink:href="#SVGID_3_" style="overflow:visible;" />
            </clipPath>
            <g id="Group_19-2" class="st4">
              <image
                style="overflow:visible;enable-background:new    ;"
                width="1024"
                height="683"
                id="Bitmap-2"
                xlink:href="~assets/images/B55F42E9.jpg"
                transform="matrix(0.2583 0 0 0.2583 -78.9495 25.6332)"
              />
            </g>
          </g>
        </g>
        <g id="frontImageBubble" transform="translate(120.351 59.615)">
          <circle id="Oval_Copy-2" class="st5" cx="143.2" cy="163.3" r="130.6" />
          <g>
            <defs>
              <circle id="SVGID_5_" cx="143.2" cy="163.3" r="130.6" />
            </defs>
            <clipPath id="SVGID_6_">
              <use xlink:href="#SVGID_5_" style="overflow:visible;" />
            </clipPath>
            <g id="Group_18-2" class="st6">
              <image
                style="overflow:visible;enable-background:new    ;"
                width="1024"
                height="683"
                id="Bitmap-3"
                xlink:href="~assets/images/B55F42EF.jpg"
                transform="matrix(0.3838 0 0 0.3838 -71.3475 32.236)"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
}
.enrollment-rate {
  padding: 100px 20px;
  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;

    h2 {
      max-width: 285px;
      font-size: 43px;
      font-weight: bold;
      color: #4611a9;
      line-height: 45px;
      span {
        color: #ff1a80;
      }
    }
    p {
      max-width: 285px;
      font-size: 15px;
    }

    svg {
      max-width: 285px;
      justify-self: center;
      width: 100%;
    }
  }
  .st0 {
    opacity: 0.904;
  }
  .st1 {
    fill: #ff4081;
  }
  .st2 {
    clip-path: url(#SVGID_2_);
  }
  .st3 {
    fill: #4611a9;
    stroke: #4f00b0;
    stroke-miterlimit: 10;
  }
  .st4 {
    clip-path: url(#SVGID_4_);
  }
  .st5 {
    fill: #d8d8d8;
    stroke: #ffffff;
    stroke-width: 10;
    stroke-miterlimit: 10;
  }
  .st6 {
    clip-path: url(#SVGID_6_);
  }
  .st7 {
    fill: #d8d8d8;
  }
}

@media only screen and (max-width: 1024px) {
  section {
    width: 100%;
    margin: 0 auto;
  }

  .enrollment-rate {
    padding: 24px;
    &__grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 16px;
      justify-items: center;
      align-items: center;

      h2 {
        text-align: center;
        max-width: 100%;
        span {
          color: #ff1a80;
        }
      }

      p {
        max-width: 100%;
        text-align: center;
      }
    }
  }
}
</style>
