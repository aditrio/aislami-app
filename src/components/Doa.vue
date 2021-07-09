<template>
  <div>
    <v-row class="mt-2" justify="center">
      <v-col cols="8">
        <v-text-field
          v-model="cari"
          color="white"
          solo
          background-color="teal darken-1"
          prepend-inner-icon="mdi-magnify"
          label="Cari doa bisa disini yaa ..."
        ></v-text-field>
      </v-col>
    </v-row>
    <center v-if="isLoading">
      <vue-loading />
    </center>
    <v-list-item v-for="(item, i) in searchedDoa" :key="i">
      <v-list-item-icon>
        <v-icon>mdi-hand-heart</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title class="mb-2">{{ item.title }}</v-list-item-title>
        <v-divider></v-divider>
      </v-list-item-content>
      <v-list-item-action>
        <v-btn color="teal darken-1" @click="openSheet(item)">
          <v-icon>mdi-emoticon-wink</v-icon>
          Coba lihat dulu bentar
        </v-btn>
      </v-list-item-action>
    </v-list-item>
    <v-bottom-sheet inset v-model="sheet">
      <v-sheet class="text-center" height="35%">
        <v-btn
          class="mt-6 mb-6"
          dense
          color="teal darken-1"
          @click="sheet = !sheet"
        >
          Tutup
        </v-btn>

        <v-divider></v-divider>
        <div class="py-3 mt-2 px-6 text-center">
          <h3>
            {{ selectedDoa.arabic }}
          </h3>
          <br />
          <p>
            <i>
              {{ selectedDoa.latin }}
            </i>
          </p>
          <p>
            {{ selectedDoa.translation }}
          </p>
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "doa",
  data() {
    return {
      doa: [],
      searchedDoa: [],
      isLoading: true,
      cari: "",
      sheet: false,
      selectedDoa: {},
    };
  },
  methods: {
    filteredList(val) {
      //   console.log(cari);
      this.searchedDoa = this.doa.filter(function (item) {
        return item.title.toLowerCase().match(val.toLowerCase());
      });
    },
    openSheet(item) {
      this.selectedDoa = item;
      this.sheet = true;
    },
  },

  mounted() {
    axios
      .get(
        "https://islamic-api-indonesia.herokuapp.com/api/data/json/doaharian"
      )
      .then((resp) => {
        this.doa = resp.data.result.data;
        console.log(this.doa);
        this.searchedDoa = this.doa;
        this.isLoading = false;
      })
      .catch((e) => {
        console.log(e);
      });
  },

  computed: {
    search() {
      return this.cari;
    },
  },

  watch: {
    search(val) {
      this.cari = val;
      //   console.log(this.cari);
      this.filteredList(this.cari);
    },
  },
};
</script>