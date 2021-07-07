<template>
  <div>
    <!-- <v-overlay :value="overlay" :opacity="0.7">
      <loading v-if="surah" />
    </v-overlay> -->

    <v-skeleton-loader
      v-if="overlay"
      class="mx-auto"
      max-width="100%"
      type="image"
    ></v-skeleton-loader>
    <v-skeleton-loader
      v-if="overlay"
      class="mx-auto"
      max-width="100%"
      type="card"
    ></v-skeleton-loader>

    <v-card flat tile v-if="!overlay">
      <v-window v-model="onboarding" vertical>
        <v-window-item v-for="(item, n) in surah.verses" :key="`card-${n + 1}`">
          <v-card
            color="dark"
            style="
              border-bottom: #00897b 2px solid;
              max-height: 1200px;
              min-height: 300px;
              height: auto;
              overflow: auto !important;
            "
          >
            <br />
            <v-row align="center" justify="center">
              <v-card
                class="mx-auto mt-4"
                width="90%"
                style="border-top: #00897b 2px solid"
              >
                <v-card-text align="center">
                  <div>
                    QS. {{ surah.name.transliteration.id }} Ayat ke-{{ n + 1 }}
                  </div>
                  <p class="text-h4 text--primary mt-4">{{ item.text.arab }}</p>
                  <p>{{ item.text.transliteration.en }}</p>
                  <div class="text--primary">
                    {{ item.translation.id }}
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    class="ml-auto"
                    color="teal darken-1"
                    @click="reveal = true"
                  >
                    Tafsir
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                  <v-card
                    v-if="reveal"
                    class="transition-fast-in-fast-out v-card--reveal"
                    style="height: 100%"
                  >
                    <v-card-text class="pb-0">
                      <p class="text-h4 text--primary">Tafsir</p>
                      <p>
                        {{ item.tafsir.id.short }}
                      </p>
                    </v-card-text>
                    <v-card-actions class="pt-0 ml-2">
                      <v-btn color="teal darken-1" @click="reveal = false">
                        Kembali
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-expand-transition>
              </v-card>
            </v-row>
            <br />
          </v-card>
        </v-window-item>
      </v-window>

      <v-card-actions class="justify-space-between">
        <v-btn text @click="prev">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-item-group v-model="onboarding" class="text-center" mandatory>
          <v-item
            v-for="(item, n) in surah.verses"
            :key="`btn-${n}`"
            v-slot="{ active, toggle }"
          >
            <v-btn :input-value="active" icon @click="toggle">
              {{ n + 1 }}
            </v-btn>
          </v-item>
        </v-item-group>
        <v-btn text @click="next">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
// import loading from "@/components/loading.vue";

export default {
  //   components: {
  //     loading,
  //   },
  data() {
    return {
      surah: {},
      overlay: true,
      reveal: false,
      onboarding: 0,
    };
  },
  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
    },
    getSurah() {
      this.$store
        .dispatch("QuranModule/getSurah", { id: this.$route.params.id })
        .then((resp) => {
          this.surah = resp.data;
          console.log(this.surah);
          this.overlay = false;
        });
    },
  },
  mounted() {
    this.getSurah();
  },
};
</script>

<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>