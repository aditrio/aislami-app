<template>
  <div>
    <center v-if="isLoading">
      <vue-loading />
      <br />
    </center>
    <v-row class="px-3 py-2">
      <v-col v-for="(item, i) in kisah" :key="i">
        <v-card
          class="mx-auto"
          max-width="344"
          style="border-top: teal 2px solid"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">{{ i + 1 }}</div>
              <v-list-item-title class="text-h5 mb-1">
                {{ item.name }}
              </v-list-item-title>
              <v-list-item-subtitle
                >Tempat lahir : {{ item.tmp }}</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar
              rounded
              width="100"
              height="65"
              style="object-fit: cover !important"
            >
              <img :src="item.image_url" />
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn
              @click="openSheet(item.description)"
              color="teal darken-1 ml-2"
            >
              <v-icon>mdi-emoticon-wink</v-icon>
              Baca yuk
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-bottom-sheet v-model="sheet">
      <v-sheet class="text-center" height="50%">
        <v-btn
          class="mt-6 mb-6"
          dense
          color="teal darken-1"
          @click="sheet = !sheet"
        >
          Tutup
        </v-btn>

        <v-divider></v-divider>
        <div
          class="py-3 mt-2 px-6 text-justify"
          style="overflow: auto; height: 350px"
        >
          <p class="mx-6" v-html="selectedKisah"></p>
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "kisah",
  data() {
    return {
      kisah: {},
      isLoading: true,
      sheet: false,
      selectedKisah: "",
    };
  },

  methods: {
    getKisah() {
      axios
        .get(
          "https://islamic-api-indonesia.herokuapp.com/api/data/json/kisahnabi"
        )
        .then((resp) => {
          this.kisah = resp.data.result;
          //   console.log(this.kisah);
          this.isLoading = false;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    openSheet(item) {
      this.selectedKisah = item;
      this.sheet = true;
    },
  },

  mounted() {
    this.getKisah();
  },
};
</script>