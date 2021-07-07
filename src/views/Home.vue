<template>
  <div>
    <br />
    <br />
    <v-row justify="center" class="mt-3">
      <v-col cols="6" align="center">
        <h1 class="display-2"><b>Aislami app</b></h1>
        <h3>
          -- <br />
          Sudah kami kumpulkan beberapa hal yang mungkin membantumu <br />
          --
        </h3>
      </v-col>
    </v-row>
    <br />
    <v-row justify="center">
      <v-col cols="10">
        <template>
          <v-tabs
            fixed-tabs
            color="teal darken-1"
            dark
            v-model="tab"
            style="border-top-right-radius: 15px; border-top-left-radius: 15px"
          >
            <v-tabs-slider color="teal darken-1"></v-tabs-slider>
            <v-tab
              href="#alquran"
              active-class="isActive"
              style="border-top-left-radius: 15px"
              >Al-Quran</v-tab
            >
            <v-tab href="#iqra" active-class="isActive">Iqra</v-tab>
            <v-tab href="#kisahnabi" active-class="isActive">Kisah Nabi</v-tab>
            <v-tab href="#bacaansholat" active-class="isActive"
              >Bacaan Sholat</v-tab
            >
            <v-tab
              style="border-top-right-radius: 15px"
              href="#doaharian"
              active-class="isActive"
              >Doa harian</v-tab
            >
          </v-tabs>
        </template>
        <br />
        <v-tabs-items v-model="tab" style="border-top: teal 2px solid">
          <v-tab-item value="alquran">
            <v-card flat>
              <v-card-text align="center"
                ><h3><b>Ayo kita ngaji !!</b></h3></v-card-text
              >
              <v-row class="mt-2" justify="center">
                <v-col cols="8">
                  <v-text-field
                    v-model="cari"
                    color="white"
                    solo
                    background-color="teal darken-1"
                    prepend-inner-icon="mdi-magnify"
                    label="Cari surah bisa disini yaa ..."
                  ></v-text-field>

                  <!-- <v-divider></v-divider> -->
                </v-col>
              </v-row>
              <al-quran :query="cari" />
            </v-card>
          </v-tab-item>
          <v-tab-item value="iqra">
            <v-card flat>
              <v-card-text align="center">
                <h3><b>Kamu bisa download IQRA 1 - 6 disini</b></h3>
              </v-card-text>
            </v-card>
            <iqra />
          </v-tab-item>
          <v-tab-item value="kisahnabi">
            <v-card flat>
              <v-card-text align="center"
                ><h3>
                  <b>Kisah-kisah Nabi & Rasul hebat-hebat loo</b>
                </h3></v-card-text
              >
            </v-card>
          </v-tab-item>
          <v-tab-item value="bacaansholat">
            <v-card flat>
              <v-card-text align="center"
                ><h3>
                  <b>Jangan sampai lupa bacaan sholat yaaa</b>
                </h3></v-card-text
              >
            </v-card>
          </v-tab-item>
          <v-tab-item value="doaharian">
            <v-card flat>
              <v-card-text align="center"
                ><h3>
                  <b>Berdoa itu penting loo</b>
                </h3></v-card-text
              >
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
    <div class="mb-5"></div>
  </div>
</template>

<script>
import Iqra from "../components/Iqra";
import AlQuran from "../components/AlQuran";

export default {
  components: {
    Iqra,
    AlQuran,
  },
  data() {
    return {
      tab: null,
      cari: "",
    };
  },

  mounted() {
    this.$store.dispatch("QuranModule/getQuranList");
  },
};
</script>


<style >
.v-application .display-2 {
  font-family: "Titillium Web", sans-serif !important;
}
</style>