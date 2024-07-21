<template>
  <div>
    <app-header></app-header>
    <b-container fluid class="mb-4 text-center">
      <b-row>
        <b-col cols="12">
          <b-avatar class="theme-bg-color" size="6rem"></b-avatar>
        </b-col>
      </b-row>
      <h3 class="mt-4">Welcome, {{ getName }}</h3>
      <!-- <p>View, manage and edit your details here.</p> -->
      <b-row>
        <b-col md="3"></b-col>
        <b-col md="6"
          ><b-card class="text-left">
            <b-row>
              <!-- <b-col cols="12" class="text-right"
                >
                <b-button
                  variant="outline-danger"
                  size="sm"
                  v-b-modal.edit-details-modal
                >
                  <i class="fa fa-edit"></i> </b-button
              ></b-col> -->
              <b-col cols="6"
                ><i class="fa fa-user theme-color mr-2"></i>
                <span class="font-weight-bold">Name</span>
              </b-col>
              <b-col cols="6" class="d-flex">{{ getName }}</b-col>
              <b-col cols="6"
                ><i class="fa fa-envelope theme-color mr-2 mt-3"></i
                ><span class="font-weight-bold">Email</span></b-col
              >
              <b-col cols="6" class="mt-3">{{ getEmail }}</b-col>
              <b-col cols="6">
                <i class="fa fa-phone theme-color mr-2 mt-3"></i
                ><span class="font-weight-bold">Phone No.</span></b-col
              >
              <b-col cols="6" class="mt-3">{{ getPhone }}</b-col>
            </b-row>
          </b-card></b-col
        >
        <b-col md="3"></b-col>
      </b-row>

      <!-- <b-modal id="edit-details-modal" title="Edit Details">
        <form>
          <b-form-group label="Name*" label-for="name-input">
            <b-form-input
              id="name-input"
              v-model="details.name"
              placeholder="John Doe"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Email*" label-for="email-input">
            <b-form-input
              id="email-input"
              type="email"
              v-model="details.email"
              placeholder="mail@website.com"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Phone*" label-for="phone-input">
            <b-form-input
              id="phone-input"
              type="tel"
              v-model="details.phone"
              placeholder="123-456-7890"
              required
            ></b-form-input>
          </b-form-group>
        </form>
        <template #modal-footer="{ ok, cancel }">
          <b-button pill variant="outline-danger" @click="ok()">
            Save Changes
          </b-button>
          <b-button pill variant="danger" @click="cancel()"> Cancel </b-button>
        </template>
      </b-modal> -->
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppHeader from "../../components/layout/AppHeader.vue";
export default {
  name: "ManageProfile",
  middleware: "auth",
  components: { AppHeader },
  data() {
    return {
      details: {
        name: "Jane Doe",
        email: "jane@gmail.com",
        phone: 9876543210,
      },
    };
  },
  computed: {
    ...mapGetters(["getName", "getEmail", "getPhone"]),
  },
};
</script>
