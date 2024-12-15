<script lang="ts">

export default {

  data() {
    return {
      purchases: [
        {
          id: 1,
          product: "microfono, audifonos",
          qtty: 2,
          price: 10000,
          status: "Entregado"
        }]
    };
  }
}
</script>

<template>
  <div style="min-height: 50vh;">
    <v-row>
      <v-col cols="8">
        <v-card>
          <v-card-title>
            Compras realizadas
          </v-card-title>

          <v-card-text>
            <v-table v-if="purchases.length > 0">
              <thead>
                <tr>
                  <th class="text-left">
                    Producto(s)
                  </th>
                  <th class="text-left">
                    Cantidad
                  </th>
                  <th>
                    Total
                  </th>

                  <th class="text-left">
                    Estado
                  </th>

                </tr>
              </thead>
              <tbody>
                <tr v-for="detail in purchases" :key="detail.id">
                  <td>{{ detail.product }}</td>
                  <td>{{ detail.qtty }}</td>
                  <td>{{ detail.price }}</td>
                  <td>
                    <v-chip color="teal" prepend-icon="mdi-checkbox-marked-circle">
                      {{ detail.status }}
                    </v-chip>
                  </td>

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