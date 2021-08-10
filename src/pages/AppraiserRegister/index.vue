<template>
  <div class="register-appraiser">
    <v-container>
      <v-row justify="center">
        <v-col sm="6" lg="3">
          <v-card elevation="0" class="register-appraiser__form">
            <h4 class="form__title">Cadastrar avaliador</h4>
            <div class="form__subtitle">
              Para criar um teste é necessário ter uma conta
            </div>
            <v-form>
              <v-text-field
                class="form__input"
                dense
                v-model="form.name"
                label="Nome"
                required
              ></v-text-field>
              <v-text-field
                class="form__input"
                dense
                v-model="form.email"
                label="E-mail"
                required
              ></v-text-field>
              <v-text-field
                class="form__input"
                dense
                v-model="form.password"
                label="Senha"
                required
              ></v-text-field>
              <v-text-field
                class="form__input"
                dense
                v-model="form.confirmPassword"
                label="Confirme a senha"
                required
              ></v-text-field>
            </v-form>
            <v-btn color="primary" elevation="2" @click="register">
              Salvar
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss" scoped></style>
