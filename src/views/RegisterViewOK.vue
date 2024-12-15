<template>
  <div style="min-height: 60vh;">
    <VCard style="margin: 6% 10%;">
      <VRow>
        <VCol>
          <VCard class="h-100">
            <VCardTitle primary-title class="my-8 d-flex justify-center">Registro completado
            </VCardTitle>
            <VCardText>
              <VCol class="px-10">
                <VRow class="pt-4">
                  <VBtn 
                    class="w-100" 
                    prepend-icon="mdi-login" 
                    color="#292929" 
                    @click="load" 
                    :loading="loading">
                    Ir a hacer el login
                  </VBtn>
                </VRow>
              </VCol>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
    </VCard>
  </div>
</template>

<script>
export default {
  data: () => ({ loading: false }),

  methods: {
    load() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.$router.push('/login');
      }, 500)
    },
  }
}
</script>
