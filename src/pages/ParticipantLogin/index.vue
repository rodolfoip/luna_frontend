<template>
  <div class="login-participant">
    <v-container>
      <v-row justify="center">
        <v-col sm="6" lg="3">
          <v-card elevation="0" class="login-participant__form">
            <h4 class="form__title">Acessar teste</h4>
            <div class="form__subtitle">
              É necessário ter um código de acesso disponibilizado pelo
              avaliador
            </div>
            <v-form>
              <v-text-field
                class="form__input"
                dense
                v-model="accessCode"
                label="Código de acesso"
                required
              ></v-text-field>
            </v-form>
            <v-btn color="primary" elevation="2" @click="initTest">
              Entrar
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
