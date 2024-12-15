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
                  <v-text-field label="Nombres"></v-text-field>
                </VRow>
                <VRow class="pt-4">
                  <v-text-field label="Apellidos"></v-text-field>
                </VRow>
                <VRow class="pt-4">
                  <v-select label="Tipo de documento"
                    :items="['Cedula de ciudadania', 'Cedula de extranjeria', 'Pasaporte']"></v-select>
                </VRow>
                <VRow class="pt-4">
                  <v-text-field label="Numero de documento"></v-text-field>
                </VRow>
                <VRow class="pt-4">
                  <v-text-field label="Email"></v-text-field>
                </VRow>
                <VRow class="pt-4">
                  <v-text-field type="password" label="Contraseña"></v-text-field>
                </VRow>

                <VRow class="pt-4">
                  <VBtn 
                    variant="outlined" 
                    color="red" 
                    class="w-100" 
                    dark 
                    @click="load"
                    :loading="loading">
                    Crear cuenta
                  </VBtn>
                </VRow>
                <VRow class="pt-4">
                  <p><b>¿Ya tienes cuenta?</b></p>
                </VRow>

                <VRow class="pt-4">
                  <VBtn variant="outlined" class="w-100" dark>Ingresar</VBtn>
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
      load () {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.$router.push('/register-successful');
        }, 3000)
      },
    },
  }
</script>