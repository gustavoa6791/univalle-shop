<script lang="ts">
import TopBar from './layouts/default/TopBar.vue'
import Footer from '@/layouts/default/Footer.vue'

export default {
  components: {
    TopBar,
    Footer
  }
}
</script>

<template>
  <v-app>
    <TopBar />

    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>
