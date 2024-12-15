<script lang="ts">

export default {

  data() {
    return {
      favorites: [{
    "name": "Silla", 
    "price": 56, 
    "id": 1, 
    "image": "/products/silla.webp",
    "categoryId": 1,
    "description": "silla ergonomica estilo elegante"
}, {
    "name": "Monitor", 
    "price": 450, 
    "id": 2, 
    "image": "/products/monitor.jpg",
    "categoryId": 1,
    "description": "Monitor de alta tecnologia, IPC"
}, {
    "name": "Micrófono", 
    "price": 20, 
    "id": 3, 
    "image": "/products/microfono.jpg",
    "categoryId": 2,
    "description": "microfono de alta fidelidad y cancelacion de ruido "
}]
    };
  }
}
</script>

<template>
  <div style="min-height: 50vh;">
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            Favoritos
          </v-card-title>

          <v-card-text>
            <v-table v-if="favorites.length > 0">
        
              <tbody>
                <tr v-for="product in favorites" :key="product.id">
                  <v-card class="m-2" >
                  <VRow>
                    <VCol cols="2">
                        <v-img :src="product.image" height="100px"  width="100px"  cover />
                    </VCol>
                    <VCol cols="6">
                        <h5>{{ product.name }}</h5>
                        <p>{{ product.description }}</p>
                        <p>${{ product.price }}</p>
                    </VCol>
                  </VRow>
                </v-card>
                  
                </tr>
              </tbody>

            </v-table>
            <p v-else>
              Aún no has relaizado compras
              Haz <router-link to="/">clic aquí</router-link> para ver los productos disponibles.
            </p>
          </v-card-text>
        </v-card>
      </v-col>

    </v-row>
  </div>

</template>