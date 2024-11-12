<script lang="ts">
import { useCartStore } from '@/stores/cart';

export default {
  computed: {
    itemsCount() {
      const cartStore = useCartStore();
      return cartStore.cartItemsCount;
    }
  }
}
</script>

<template>
  <v-app-bar flat>
    <v-container class="fill-height d-flex">
      <RouterLink to="/" custom v-slot="{ navigate }">
        <v-img src="/logo.png" @click="navigate" />
      </RouterLink>

      <v-spacer></v-spacer>
      <v-text-field density="compact" variant="solo" label="Buscar Productos" append-inner-icon="mdi-magnify" single-line
        hide-details flat></v-text-field>

      <RouterLink to="/cart" custom v-slot="{ navigate }">
        <v-badge :content="itemsCount" :model-value="itemsCount > 0" color="orange-lighten-2">
          <v-btn :active="$route.name === 'cart'" variant="text" @click="navigate">
            <v-icon class="mr-0 mr-sm-2" icon="mdi-cart" />
            <span class="d-none d-sm-flex">Carrito</span>
          </v-btn>
        </v-badge>
      </RouterLink>

      <RouterLink to="/about" custom v-slot="{ navigate }">
        <v-btn :active="$route.name === 'about'" variant="text" @click="navigate">
          <v-icon class="mr-0 mr-sm-2" icon="mdi-login" />
          <span class="d-none d-sm-flex">ingresar</span>
        </v-btn>
      </RouterLink>
      <RouterLink to="/about" custom v-slot="{ navigate }">
        <v-btn :active="$route.name === 'about'" variant="text" @click="navigate">
          <v-icon class="mr-0 mr-sm-2" icon="mdi-account-plus" />
          <span class="d-none d-sm-flex">registrarse</span>
        </v-btn>
      </RouterLink>



      <!--  <v-responsive max-width="260">
          <v-text-field
            density="compact"
            hide-details
            variant="solo"
          ></v-text-field>
        </v-responsive> -->
    </v-container>
  </v-app-bar>
</template>