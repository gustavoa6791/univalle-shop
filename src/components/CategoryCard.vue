<script lang="ts">
import type { PropType } from 'vue';
import type { Category } from '../model/types';

export default {
    props: {
        categories: {
            type: Object as PropType<Category>,
            required: true
        }
    },
}
</script>

<template>
    <v-card variant="text"  class="d-flex flex-column align-center pa-4 text-center">

        <v-avatar size="60"  color="#212121">
            <v-icon size="x-large"  :icon="'mdi-'+categories.icon"></v-icon>
        </v-avatar>

        <v-card-title class="text-h5 font-weight-bold">
            {{ categories.name }}
        </v-card-title>

        <v-card-text>
            <p class="mb-4">
                {{ categories.description }}
            </p>
        </v-card-text>

    </v-card>
</template>