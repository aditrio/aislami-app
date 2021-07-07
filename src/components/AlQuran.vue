<template>
  <div>
    <center v-if="listQuran.length == 0">
      <vue-loading />
    </center>
    <v-list-item v-for="(item, i) in searchedSurah" :key="i" class="ma-3">
      <v-list-item-icon>
        <v-icon>mdi-book-open-page-variant</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title class="mb-2"
          >{{ item.number }}. Surah
          {{ item.name.transliteration.id }}</v-list-item-title
        >
        <v-list-item-subtitle> {{ item.tafsir.id }} </v-list-item-subtitle>
        <v-divider></v-divider>
      </v-list-item-content>
      <v-list-item-action>
        <v-btn
          color="teal darken-1"
          @click="$router.push('/detail-surah/' + item.number)"
        >
          <v-icon class="mr-1">mdi-emoticon-wink</v-icon>
          Baca yuk
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </div>
</template>

<script>
export default {
  props: ["query"],
  data() {
    return {
      listQuran: [],
      searchedSurah: [],
      cari: "",
    };
  },

  methods: {
    filteredList(val) {
      this.searchedSurah = this.listQuran.filter(function (item) {
        return item.name.transliteration.id
          .toLowerCase()
          .match(val.toLowerCase());
      });
    },
  },

  created() {
    this.$store.dispatch("QuranModule/getQuranList");
  },

  computed: {
    search() {
      return this.$props.query;
    },
    getQuranList() {
      return this.$store.getters["QuranModule/getQuranList"];
    },
  },

  watch: {
    getQuranList(val) {
      this.listQuran = val;
      this.searchedSurah = this.listQuran;
      //   console.log(this.listQuran);
    },
    search(val) {
      this.cari = val;
      console.log(this.cari);
      this.filteredList(this.cari);
    },
  },
};
</script>

<style scoped>
</style>