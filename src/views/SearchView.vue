<script lang="ts">
import LeftMenu from '@/components/left/LeftMenu.vue';
import ProductList from '@/components/ProductList.vue';
import { useCategoriesStore } from '@/stores/categories';
import { useProductsStore } from '@/stores/products';

function updateCategoryFromRouteParams(categoryIdParam: string|string[]) {
  const productsStore = useProductsStore();
  const categoryId = Number(categoryIdParam);
  productsStore.selectCategory(categoryId);
}

export default {
    components: {
    LeftMenu,
    ProductList,
  },
  beforeRouteEnter(to) {
      updateCategoryFromRouteParams(to.params.categoryId);
  },
  beforeRouteUpdate(to) {
      updateCategoryFromRouteParams(to.params.categoryId);
  },
  mounted() {
    const productsStore = useProductsStore();
    productsStore.fetchProducts();

    const categoriesStore = useCategoriesStore();
  }
    
}
</script>

<template>
    <VRow>
        <VCol cols="12" sm="3" md="3" lg="2"><LeftMenu /></VCol>
        <VCol>  <ProductList /> </VCol>
    </VRow> 
</template>
