<script lang="ts">
import ProductList from '@/components/ProductList.vue';
import CategoryList from '@/components/CategoryList.vue';
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
    Carousel,
    Separator,
    CategoryList
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
    categoriesStore.fetchCategories();
  },

  computed: {
    id() {
      return this.$route.query.user ?? null; 
    },
  },
}  
</script>



<template>
  <Carousel/>
  <v-row>
    <!-- -->
    <Separator message="Recomendados para ti ...."/>
    <v-col cols="12" sm="9" md="9" lg="12">
      <ProductList />
    </v-col>
    <Separator message="Categorias populares"/>
    <CategoryList />
  </v-row>
</template>
