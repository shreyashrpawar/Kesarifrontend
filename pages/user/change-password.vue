<template>
  <div>
    <app-header></app-header>
    <b-container fluid class="mb-4 text-center">
      <b-row cols="12 d-flex justify-content-center">
        <section>
          <h1 class="font-weight-bold mt-4">Change Password</h1>
          <p class="mb-4">Enter your new password</p>

          <b-form @submit.prevent="onSubmit">
            <!-- Input for Password  -->
            <b-form-group
              id="input-group-0"
              label="Current Password*"
              label-for="input-0"
            >
              <b-form-input
                id="input-0"
                type="password"
                placeholder="current password"
                v-model.trim="current_password"
                required
              ></b-form-input>
              <div style="color: red" v-if="!$v.current_password.required">
                Current password is required.
              </div>
            </b-form-group>
            <b-form-group
              id="input-group-1"
              label="Password*"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                type="password"
                placeholder="password"
                v-model.trim="new_password"
                required
              ></b-form-input>
              <div style="color: red" v-if="!$v.new_password.required">
                New password is required.
              </div>
              <div style="color: red" v-if="!$v.new_password.minLength">
                New password must have at least
                {{ $v.new_password.$params.minLength.min }} letters.
              </div>
            </b-form-group>
            <b-form-group
              id="input-group-2"
              label="Confirm Password*"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                type="password"
                placeholder="confirm password"
                v-model.trim="new_confirm_password"
                required
              ></b-form-input>
              <div
                style="color: red"
                v-if="!$v.new_confirm_password.sameAsPassword"
              >
                Passwords must be identical.
              </div>
            </b-form-group>
            <b-button
              type="submit"
              block
              pill
              squared
              variant="danger"
              class="mt-4 p-3 mb-2 theme-bg-color"
              ><span>{{
                processing ? "Updating ..." : "Change Password"
              }}</span>
            </b-button>
          </b-form>
        </section>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { minLength, required, sameAs } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
import AppHeader from "../../components/layout/AppHeader.vue";
export default {
  name: "ManageProfile",
  middleware: "auth",
  components: { AppHeader },
  data() {
    return {
      current_password: "",
      new_password: "",
      new_confirm_password: "",
      processing: false,
    };
  },
  validations: {
    current_password: {
      required,
    },
    new_password: {
      required,
      minLength: minLength(6),
    },
    new_confirm_password: {
      sameAsPassword: sameAs("new_password"),
    },
  },
  computed: {
    ...mapGetters(["getName", "getEmail", "getPhone"]),
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      this.$v.$touch();
      if (this.$v.$invalid) return;
      this.processing = true;
      let storage = JSON.parse(window.localStorage.getItem("vuex"));
      if (storage) {
        this.$axios
          .post(
            "change-password",
            {
              current_password: this.current_password,
              new_password: this.new_password,
              new_confirm_password: this.new_confirm_password,
            },
            {
              headers: {
                Authorization: `Bearer ${storage.auth.token}`,
              },
            }
          )
          .then((res) => {
            console.log(res);
            if (res.data.hasError) {
              this.$toast.error(res.data.message);
            } else {
              this.$toast.success("Password changed successfully!");
              this.$router.push("/");
            }
            this.processing = false;
          })
          .catch((err) => {
            console.log(
              "🚀 ~ file: index.vue ~ line 127 ~ onSubmit ~ err",
              err
            );
            this.processing = false;
            this.$toast.error(
              "The current password should match your old password!"
            );
            this.errors = err.message;
            setTimeout(() => (this.errors = false), 3000);
          });
      }
    },
  },
};
</script>
