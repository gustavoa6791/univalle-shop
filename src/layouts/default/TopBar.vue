<script lang="ts">
import { useCartStore } from '@/stores/cart';
import { useHeaderStore } from '@/stores/header';

export default {
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    onSearch() {
      if (this.searchQuery.trim()) {
        this.$router.push({ name: 'search', query: { q: this.searchQuery } });
      }
    }
  },
  computed: {
    itemsCount() {
      const cartStore = useCartStore();
      return cartStore.cartItemsCount;
    },
    isLogging() {
      return useHeaderStore().isLogging;
    },
    user() {
      return useHeaderStore().user;
    },
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
      <v-text-field density="compact" variant="solo" label="Buscar Productos" append-inner-icon="mdi-magnify"
        single-line hide-details flat @keyup.enter="onSearch" v-model="searchQuery"></v-text-field>

      <RouterLink to="/cart" custom v-slot="{ navigate }">
        <v-badge :content="itemsCount" :model-value="itemsCount > 0" color="orange-lighten-2">
          <v-btn :active="$route.name === 'cart'" variant="text" @click="navigate">
            <v-icon class="mr-0 mr-sm-2" icon="mdi-cart" />
            <span class="d-none d-sm-flex">Carrito</span>
          </v-btn>
        </v-badge>
      </RouterLink>

      <div v-if="!isLogging">

        <RouterLink to="/login" custom v-slot="{ navigate }">
          <v-btn :active="$route.name === 'about'" variant="text" @click="navigate">
            <v-icon class="mr-0 mr-sm-2" icon="mdi-login" />
            <span class="d-none d-sm-flex">ingresar</span>
          </v-btn>
        </RouterLink>
        <RouterLink to="/register" custom v-slot="{ navigate }">
          <v-btn :active="$route.name === 'about'" variant="text" @click="navigate">
            <v-icon class="mr-0 mr-sm-2" icon="mdi-account-plus" />
            <span class="d-none d-sm-flex">registrarse</span>
          </v-btn>
        </RouterLink>

      </div>

      <div v-else>

        <RouterLink to="/favorites" custom v-slot="{ navigate }">
          <v-btn :active="$route.name === 'about'" variant="text" @click="navigate">
            <v-icon class="mr-0 mr-sm-2" icon="mdi-heart" />
            <span class="d-none d-sm-flex">favoritos</span>
          </v-btn>
        </RouterLink>


        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn color="primary" v-bind="props">
              <v-icon class="mr-0 mr-sm-2" icon="mdi-account" />
              {{ user }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-btn>
                  <span>Perfil</span>
                </v-btn>
            </v-list-item>
            <v-list-item>
              <RouterLink to="/purchase">
                <v-btn>
                  <span>compras</span>
                </v-btn>
              </RouterLink>
            </v-list-item>
            <v-list-item>
              <v-btn>
                  <span>Preferencias</span>
                </v-btn>

            </v-list-item>
            <v-list-item>
              <v-btn>
                  <span>Cerrar sesion </span>
                </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-container>
  </v-app-bar>
</template>
