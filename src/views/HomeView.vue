<script lang="ts">
import ProductList from '@/components/ProductList.vue';
import LeftMenu from '@/components/left/LeftMenu.vue';
import Carousel from '../components/Carousel.vue';
import Separator from '@/components/Separator.vue';
import { useCategoriesStore } from '@/stores/categories';
import { useProductsStore } from '@/stores/products';

function updateCategoryFromRouteParams(categoryIdParam: string|string[]) {
  const productsStore = useProductsStore();
  const categoryId = Number(categoryIdParam);
  productsStore.selectCategory(categoryId);
}

export default {
  components: {
    ProductList,
    LeftMenu,
    Carousel,
    Separator
  },
  beforeRouteEnter(to) {
      updateCategoryFromRouteParams(to.params.categoryId);
  },
  beforeRouteUpdate(to) {
      updateCategoryFromRouteParams(to.params.categoryId);
  },
  mounted() {
    console.log('mounted');

    const productsStore = useProductsStore();
    productsStore.fetchProducts();

    const categoriesStore = useCategoriesStore();
    categoriesStore.fetchCategories();
  }
}  
</script>

<template>
  <Carousel/>
  <v-row>
    <!-- <v-col cols="12" sm="3" md="3" lg="2">
      <LeftMenu />
    </v-col> -->
    <Separator/>
    <v-col cols="12" sm="9" md="9" lg="12">
      <ProductList />
    </v-col>
  </v-row>
</template>
