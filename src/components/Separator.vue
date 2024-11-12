<script lang="ts">
import type { PropType } from 'vue';
import type { Product } from '../model/types';
import { useCartStore } from '@/stores/cart';

export default {
    props: {
        message: {
            type: String,
            required: true
        }
    }
}
</script>

<template>
    <v-sheet rounded="lg" class="p-4 mt-10 mb-2 w-100">
        {{ message }}
    </v-sheet>
</template>