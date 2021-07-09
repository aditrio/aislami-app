<template>
  <div>
    <center v-if="isLoading">
      <vue-loading />
    </center>
    <v-timeline align-top dense>
      <v-timeline-item
        color="teal darken-1"
        v-for="(item, i) in bacaan"
        :key="i"
      >
        <v-card
          class="elevation-2"
          max-width="90%"
          style="border-top: teal 2px solid"
        >
          <v-card-title class="text-h5 text-center">
            {{ item.name }}</v-card-title
          >
          <v-card-text class="text-center">
            {{ item.arabic }} <br />
            <br />
            <span class="mt-4">
              {{ item.latin }}
            </span>
            <br />
            <br />
            <hr />
            <br />
            <b style="color: teal">A R T I N Y A</b>
            <br />

            {{ item.terjemahan }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "bacaan",
  data() {
    return {
      bacaan: {},
      isLoading: true,
    };
  },

  mounted() {
    axios
      .get(
        "https://islamic-api-indonesia.herokuapp.com/api/data/json/bacaanshalat"
      )
      .then((resp) => {
        this.bacaan = resp.data.result;
        console.log(this.bacaan);
        this.isLoading = false;
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>