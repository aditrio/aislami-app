<template>
  <div>
    <v-list-item v-for="i in 6" :key="i">
      <v-list-item-icon>
        <v-icon>mdi-book</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title class="mb-2">IQRA {{ i }}</v-list-item-title>
        <v-divider></v-divider>
      </v-list-item-content>
      <v-list-item-action>
        <v-btn
          color="teal darken-1"
          target="_blank"
          :href="
            'https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra' + i
          "
        >
          <v-icon>mdi-download</v-icon>
          Download
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </div>
</template>

<script>
export default {
  name: "iqra",
};
</script>