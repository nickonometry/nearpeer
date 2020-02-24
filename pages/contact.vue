<template>
  <div>
    <div class="hero__image">
      <div class="hero__text">
        <h1 style="font-size:50px">Contact</h1>
      </div>
    </div>
    <section class="inputform">
      <v-card class="contact-card" min-width="960">
        <div class="card__content">
          <h2>We're here to help you</h2>
          <form>
            <div class="two__column">
              <v-text-field
                class="two__column--full"
                outlined
                dense
                v-model="hereToHelp"
                :error-messages="hereToHelpErrors"
                label="What may we help you with?"
                required
                @input="$v.hereToHelp.$touch()"
                @blur="$v.hereToHelp.$touch()"
              ></v-text-field>
              <v-text-field
                outlined
                dense
                v-model="name"
                :error-messages="nameErrors"
                label="Name"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                outlined
                dense
                v-model="lastName"
                :error-messages="nameErrors"
                label="Last Name"
                required
                @input="$v.lastName.$touch()"
                @blur="$v.lastName.$touch()"
              ></v-text-field>
              <v-text-field
                outlined
                dense
                v-model="Title"
                :error-messages="titleErrors"
                label="E-mail"
                required
                @input="$v.title.$touch()"
                @blur="$v.title.$touch()"
              ></v-text-field>
              <v-text-field
                outlined
                dense
                v-model="institution"
                :error-messages="institutionErrors"
                label="Institution / Organization"
                required
                @input="$v.institution.$touch()"
                @blur="$v.institution.$touch()"
              ></v-text-field>
              <v-text-field
                outlined
                dense
                v-model="email"
                :error-messages="emailErrors"
                label="Email"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
              <v-text-field
                outlined
                dense
                v-model="phone"
                :error-messages="phoneErrors"
                label="Phone (Optional)"
                required
                @input="$v.phone.$touch()"
                @blur="$v.phone.$touch()"
              ></v-text-field>
              <v-textarea
                class="two__column--full"
                outlined
                name="input-7-4"
                label="Outlined textarea"
                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
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
    <CallToAction
      link="/student-success"
      buttonText="Student Success"
    >Check out some Student Success stories with Nearpeer.</CallToAction>
  </div>
</template>

<script>
import CallToAction from "../components/CallToAction";
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  components: {
    CallToAction
  },
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      }
    }
  },

  data: () => ({
    name: "",
    email: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Item is required");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
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
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.hereToHelp = "";
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = false;
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
  }
}

.inputform {
  max-width: 960px;
  margin: -200px auto;
  padding: 80px 20px;
}

.card__content {
  padding: 24px;

  h2 {
    text-align: center;
    margin-bottom: 24px;
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
</style>
