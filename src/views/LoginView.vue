<template>
  <div style="min-height: 60vh;">
    <VCard style="margin: 6% 10%;">
      <VRow>
        <VCol>
          <VCard class="h-100">
            <VCardTitle primary-title class="my-8 d-flex justify-center">Ingresa con una red social
            </VCardTitle>
            <VCardText>
              <VCol class="px-10">
                <VRow class="pt-4">
                  <VBtn class="w-100" prepend-icon="mdi-facebook" color="#292929">ingresa con Facebook
                  </VBtn>
                </VRow>
                <VRow class="pt-4">
                  <VBtn class="w-100" prepend-icon="mdi-google" color="#292929">ingresa con Google
                  </VBtn>
                </VRow>

              </VCol>

            </VCardText>

          </VCard>
        </VCol>
        <VCol>
          <VCard>
            <VCardTitle primary-title class="my-8 d-flex justify-center">Ingresá o regístrate</VCardTitle>
            <VCardText>
              <VCol>
                <VRow class="pt-4">
                  <v-text-field label="Usuario o email" v-model="user" ></v-text-field>
                </VRow>
                <VRow class="pt-4">
                  <v-text-field type="password" label="Contraseña" v-model="pass" ></v-text-field>
                </VRow>
                <VRow class="pt-4">
                  <VBtn 
                  variant="outlined" 
                  color="red" 
                  class="w-100" 
                  dark
                  @click="load" 
                  :loading="loading">
                    Ingresar
                  </VBtn>
                </VRow>
                <VRow class="pt-4">
                  <p><b>¿Olvidaste tus datos de acceso?</b></p>
                </VRow>

                <VRow class="pt-4">
                  <VBtn variant="outlined" class="w-100" dark>Registrate</VBtn>
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
        this.$router.push({ path: '/' });
      }, 4000)
    },
  },
}
</script>