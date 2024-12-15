<script lang="ts">
import type { PropType } from 'vue';
import type { Product } from '../model/types';
import { useCartStore } from '@/stores/cart';

export default {
    props: {
        product: {
            type: Object as PropType<Product>,
            required: true
        }
    },
    methods: {
        onAddButtonClick() {
            const cartStore = useCartStore();
            cartStore.addProduct(this.product);
        }
    },
    computed: {
        productImageUrl() {
            return this.product.image
                ?? 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg';
        }
    }
}
</script>

<template>
    <v-card>
        <v-img :src="productImageUrl" height="200px" cover />

        <v-card-title>
            {{ product.name }}
        </v-card-title>

        <v-card-text>
            <p class="mb-4">
                {{product.description}}
            </p>
            <div class="d-flex justify-end">
                <v-chip >
                    $ {{ product.price }}
                </v-chip>
            </div>

        </v-card-text>

        <v-card-actions class="d-flex justify-space-around">

            <v-btn 
                icon="mdi-heart" size="small" rounded="xl" 
               color="red accent-4"
                elevation="8" variant="outlined">
            </v-btn>
            <v-btn 
                size="small" rounded="xl" @click="onAddButtonClick" 
                elevation="8" variant="outlined">
                Agregar al carrito
            </v-btn>

        </v-card-actions>
    </v-card>
</template>