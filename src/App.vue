<template>
  <v-app>
    <v-app-bar app color="teal darken-1" dark dense>
      <div class="d-flex align-center">
        <h3><b> Aislami </b></h3>
      </div>

      <v-spacer></v-spacer>
      <v-btn
        v-if="$router.history.current.path != '/'"
        class="mr-2"
        dense
        @click="$router.replace('/')"
      >
        <v-icon>mdi-arrow-left-circle</v-icon>
        <span class="ml-2">Kembali</span>
      </v-btn>
      <v-btn dense @click="$router.push('/about')">
        <v-icon>mdi-at</v-icon>
        <span class="ml-2">Tentang</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-footer padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Made with <v-icon>mdi-coffee</v-icon> for you</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({}),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap");

.v-application {
  font-family: "Titillium Web", sans-serif !important;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1013%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(18%2c 18%2c 18%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c539.345C100.526%2c527.552%2c143.828%2c405.583%2c213.42%2c332.088C265.271%2c277.329%2c327.118%2c232.263%2c356.528%2c162.821C385.452%2c94.527%2c370.388%2c19.661%2c377.026%2c-54.208C386.029%2c-154.395%2c467.979%2c-272.407%2c402.501%2c-348.769C337.148%2c-424.984%2c207.575%2c-354.856%2c108.03%2c-367.916C28.429%2c-378.359%2c-42.419%2c-420.867%2c-122.638%2c-417.666C-220.27%2c-413.771%2c-325.667%2c-409.642%2c-401.153%2c-347.601C-480.681%2c-282.239%2c-528.796%2c-179.816%2c-536.899%2c-77.194C-544.801%2c22.878%2c-497.706%2c117.852%2c-444.632%2c203.057C-396.32%2c280.617%2c-321.102%2c331.123%2c-248.223%2c386.243C-169.085%2c446.098%2c-98.548%2c550.906%2c0%2c539.345' fill='%230e0e0e'%3e%3c/path%3e%3cpath d='M1440 949.8340000000001C1510.814 961.7429999999999 1561.971 882.5640000000001 1623.398 845.373 1686.886 806.934 1775.704 794.9 1807.028 727.616 1838.355 660.326 1801.968 581.831 1778.944 511.267 1759.077 450.379 1733.313 389.26099999999997 1683.494 349.01099999999997 1637.395 311.767 1574.0140000000001 313.793 1516.556 299.276 1461.663 285.407 1410.19 265.747 1353.5720000000001 265.655 1279.509 265.535 1183.5149999999999 239.925 1138.399 298.661 1092.433 358.504 1162.229 444.166 1158.564 519.5360000000001 1155.4 584.609 1089.636 648.42 1118.5520000000001 706.8009999999999 1147.633 765.516 1240.113 750.188 1292.378 789.704 1351.484 834.392 1366.9279999999999 937.5450000000001 1440 949.8340000000001' fill='%23161616'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1013'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e") !important;

  background-size: auto !important;
  background-position: top !important;
  background-repeat: no-repeat !important;
}
</style>