<script lang="ts">
import CategoryCard from '@/components/CategoryCard.vue'
import { useCategoriesStore } from '../stores/categories'
import { mapState } from 'pinia';

export default {
    components: {
        CategoryCard
    },
    computed: {
        ...mapState(useCategoriesStore, ['categories', 'loading'])
    }
}
</script>

<template>
    <div v-if="loading" class="d-flex justify-center align-center h-100">
        <v-progress-circular indeterminate :size="50" />
    </div>

    <v-row v-else>
        <v-col v-for="p in categories" :key="p.id" cols="12" sm="6" md="4" lg="3">
            <CategoryCard 
                :categories="p" />
        </v-col>
    </v-row>
</template>