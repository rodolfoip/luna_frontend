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
            <v-form @submit.prevent="register">
              <v-text-field
                class="form__input"
                dense
                v-model="form.name"
                label="Nome"
                type="text"
                required
                :error-messages="nameErrors"
                @input="$v.form.name.$touch()"
                @blur="$v.form.name.$touch()"
              ></v-text-field>
              <v-text-field
                class="form__input"
                dense
                v-model="form.email"
                label="E-mail"
                type="email"
                required
                :error-messages="emailErrors"
                @input="$v.form.email.$touch()"
                @blur="$v.form.email.$touch()"
              ></v-text-field>
              <v-text-field
                class="form__input"
                dense
                v-model="form.password"
                label="Senha"
                required
                type="password"
                :error-messages="passwordError"
                @input="$v.form.password.$touch()"
                @blur="$v.form.password.$touch()"
              ></v-text-field>
              <v-text-field
                class="form__input"
                dense
                v-model="form.confirmPassword"
                label="Confirme a senha"
                type="password"
                required
                :error-messages="confirmPasswordError"
                @input="$v.form.confirmPassword.$touch()"
                @blur="$v.form.confirmPassword.$touch()"
              ></v-text-field>
              <v-btn color="primary" elevation="2" type="submit">
                Salvar
              </v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss" scoped></style>
