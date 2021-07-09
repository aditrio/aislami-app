<template>
  <div class="about text-center">
    <v-row>
      <v-col cols="6" class="mx-auto">
        <h2 class="mt-6 mb-2">Aislami App</h2>
        <v-divider> </v-divider>
        <v-card class="mx-auto mt-4" max-width="100%">
          <v-card-text>
            <div class="text--primary">
              Sebuah website sederhana, dibuat dengan vuejs & vuetify <br />
              Semoga bisa bermanfaat buat teman-teman <br />
              <v-icon>mdi-emoticon-wink</v-icon>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              class="mx-auto"
              text
              color="teal accent-4"
              @click="reveal = true"
            >
              kontribusi ?
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <v-card
              v-if="reveal"
              class="transition-fast-in-fast-out v-card--reveal"
              style="height: 100%"
            >
              <v-card-text class="pb-0">
                <p class="text-h5 text--primary">Github</p>
                <v-btn
                  class="mx-auto"
                  color="teal accent-4"
                  href="https://github.com/aditrio/aislami-app"
                  target="_blank"
                >
                  <v-icon class="mr-1">mdi-github</v-icon>
                  Kesini aja
                </v-btn>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  text
                  class="mx-auto"
                  color="teal accent-4"
                  @click="reveal = false"
                >
                  Tutup
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reveal: false,
    };
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