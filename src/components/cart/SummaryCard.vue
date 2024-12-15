

<template>
    <v-card>
        <v-card-title>
            Resumen de la compra
        </v-card-title>
        <v-card-subtitle>
            Total a pagar: ${{ totalAmount }}
        </v-card-subtitle>
        <v-card-text>
            <v-btn variant="tonal" color="orange-lighten-2" 
                  @click="load" 
                  :loading="loading">
                Realizar pedido
            </v-btn>
        </v-card-text>
    </v-card>
</template>


<script>
  import { useHeaderStore } from '@/stores/header';

  
export default {
  data: () => ({ loading: false , user: "", pass: ""}),


  methods: {
    load() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        const headerStore = useHeaderStore();
        headerStore.setLogging(true); 
        headerStore.setUser(this.user); 
        this.$router.push({ path: '/purchase-succesful' });
      }, 4000)
    },
  },
}
</script>