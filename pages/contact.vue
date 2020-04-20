<template>
  <div>
    <v-dialog v-model="pkDialog" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Attention</v-card-title>

        <v-card-text style="padding:16px;">
          Visitors from Pakistan: You may be looking for
          <a
            href="https://www.nearpeer.org/landing"
            target="_blank"
          >Nearpeer.org</a>, as we do not currently serve Pakistan. Thank you.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="pkDialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <div class="hero__image">
      <div class="hero__text">
        <h1>Contact Us</h1>
      </div>
    </div>
    <section class="inputform" v-if="formvis">
      <v-card class="contact-card">
        <div class="card__content">
          <h2>
            We're here to help
            <span class="underline">you</span>
          </h2>
          <form>
            <div class="two__column">
              <v-text-field
                class="two__column--full"
                outlined
                dense
                v-model="helpWith"
                label="What may we help you with?*"
                required
                :error-messages="helpWithErrors"
                @input="$v.helpWith.$touch()"
                @blur="$v.helpWith.$touch()"
              ></v-text-field>
              <v-text-field
                outlined
                dense
                v-model="firstName"
                label="First Name*"
                required
                :error-messages="firstNameErrors"
                @input="$v.firstName.$touch()"
                @blur="$v.firstName.$touch()"
              ></v-text-field>
              <v-text-field
                outlined
                dense
                v-model="lastName"
                label="Last Name*"
                required
                :error-messages="lastNameErrors"
                @input="$v.lastName.$touch()"
                @blur="$v.lastName.$touch()"
              ></v-text-field>
              <v-text-field
                outlined
                dense
                v-model="title"
                label="Title*"
                required
                :error-messages="titleErrors"
                @input="$v.title.$touch()"
                @blur="$v.title.$touch()"
              ></v-text-field>
              <v-text-field
                outlined
                dense
                v-model="organization"
                label="Institution / Organization*"
                required
                :error-messages="organizationErrors"
                @input="$v.organization.$touch()"
                @blur="$v.organization.$touch()"
              ></v-text-field>
              <v-text-field
                outlined
                dense
                v-model="email"
                label="Email*"
                required
                :error-messages="emailErrors"
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
              <v-text-field outlined dense v-model="phone" label="Phone" required></v-text-field>
              <v-textarea
                class="two__column--full"
                v-model="comments"
                outlined
                name="input-7-4"
                label="Questions/Comments"
                value
              ></v-textarea>
            </div>

            <div class="toolbar-bottom">
              <div class="toolbar-bottom__start">* Required fields</div>
              <div class="toolbar-bottom__end">
                <v-btn
                  rounded
                  color="secondary"
                  @click="submit"
                  dark
                  aria-label="Submit form"
                >Submit</v-btn>
              </div>
            </div>
          </form>
        </div>
      </v-card>
    </section>
    <section class="inputform" v-else>
      <v-card class="contact-card text-center">
        <div class="card__content">
          <h2>{{outcome.title}}</h2>
          <p>{{outcome.detail}}</p>
          <v-btn rounded color="secondary" @click="clear" dark aria-label="Reset Form">OK!</v-btn>
        </div>
      </v-card>
    </section>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
import axios from "axios";

export default {
  mixins: [validationMixin],

  validations: {
    firstName: { required, maxLength: maxLength(20) },
    lastName: { required, maxLength: maxLength(20) },
    helpWith: { required },
    title: { required },
    organization: { required },
    email: { required, email }
  },
  head() {
    return {
      title: "Contact Us - "
    };
  },

  data: () => ({
    formvis: true,
    firstName: "",
    lastName: "",
    title: "",
    organization: "",
    phone: "",
    email: "",
    helpWith: "",
    comments: "",
    pkDialog: false,
    submitStatus: "unsubmitted",
    outcome: {
      title: "Uh oh, something went wrong",
      detail: "Unfortunately, something went.  Please try again."
    }
  }),

  mounted() {
    axios
      .get("https://extreme-ip-lookup.com/json/")
      .then(response => this.detectLocation(response.data.countryCode || null));
  },
  computed: {
    firstNameErrors() {
      const errors = [];
      if (!this.$v.firstName.$dirty) return errors;
      !this.$v.firstName.maxLength &&
        errors.push("First name must be at most 20 characters long");
      !this.$v.firstName.required && errors.push("First name is required.");
      return errors;
    },
    lastNameErrors() {
      const errors = [];
      if (!this.$v.lastName.$dirty) return errors;
      !this.$v.lastName.maxLength &&
        errors.push("Last name must be at most 20 characters long");
      !this.$v.lastName.required && errors.push("Last name is required.");
      return errors;
    },
    helpWithErrors() {
      const errors = [];
      if (!this.$v.helpWith.$dirty) return errors;
      !this.$v.helpWith.required &&
        errors.push("Please let us know what we can help with.");
      return errors;
    },
    titleErrors() {
      const errors = [];
      if (!this.$v.title.$dirty) return errors;
      !this.$v.title.required && errors.push("Title is required.");
      return errors;
    },
    organizationErrors() {
      const errors = [];
      if (!this.$v.organization.$dirty) return errors;
      !this.$v.organization.required &&
        errors.push("Organization is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    }
  },

  methods: {
    detectLocation(countryCode) {
      if (countryCode == null) {
        return;
      } else if (countryCode.toLowerCase() == "pk") {
        this.pkDialog = true;
      } else {
        return;
      }
    },
    submit() {
      let vm = this;
      vm.$v.$touch();
      if (vm.$v.$invalid) {
        vm.submitStatus = "ERROR";
      } else {
        vm.sendgridFire();
      }
    },
    clear() {
      this.$v.$reset();
      this.helpWith = "";
      this.firstName = "";
      this.lastName = "";
      this.title = "";
      this.organization = "";
      this.email = "";
      this.phone = "";
      this.comments = "";
      this.formvis = true;
    },
    sendgridFire() {
      let vm = this;
      var data = JSON.stringify({
        firstName: vm.firstName,
        lastName: vm.lastName,
        title: vm.title,
        organization: vm.organization,
        phone: vm.phone,
        email: vm.email,
        helpWith: vm.helpWith,
        comments: vm.comments
      });

      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
          if (this.status == 200) {
            vm.outcome.title = "Message Sent";
            vm.outcome.detail =
              "Thank you for contacting us! We'll get in touch with you shortly.";
            vm.formvis = false;
          } else {
            vm.outcome.title = "Uh oh, we encountered an error...";
            vm.outcome.detail =
              "Unfortunately, something went wrong.  Please try again.";
            vm.formvis = false;
          }
        }
      });

      xhr.open("POST", "/.netlify/functions/sendgridFire");
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.send(data);
    }
  }
};
</script>

<style lang="scss" scoped>
.hero {
  &__image {
    background-image: linear-gradient(
        to right,
        rgba(70, 17, 169, 0.8),
        rgba(70, 17, 169, 0.95)
      ),
      url("/images/contact/building.jpg");
    height: 300px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
  &__text {
    text-align: center;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
    color: white;

    h1 {
      font-size: 50px;
    }
  }
}

.inputform {
  max-width: 960px;
  margin: -200px auto 0;
  padding: 80px 20px;
}

.card__content {
  padding: 24px;

  h2 {
    text-align: center;
    margin-bottom: 24px;

    .underline {
      text-decoration: underline;
    }
  }
  p {
    text-align: center;
  }
}

.two__column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  &--full {
    grid-column: 1/3;
  }
}

.toolbar-bottom {
  display: flex;
  justify-content: space-between;
}

@media only screen and (max-width: 1000px) {
  .hero {
    width: 100%;
    &__image {
      background-image: linear-gradient(
          to right,
          rgba(70, 17, 169, 0.8),
          rgba(70, 17, 169, 0.95)
        ),
        url("/images/contact/building.jpg");
      height: 100px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
    }

    &__text {
      top: 40%;
      h1 {
        font-size: 32px;
        margin: 0;
        padding: 0;
      }
    }
  }

  .inputform {
    width: 100%;
    margin: 0 auto;
    padding: 0;
  }

  .two__column {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;

    &--full {
      grid-column: 1;
    }
  }
}
</style>
