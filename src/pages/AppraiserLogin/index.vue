<template>
  <div class="login-appraiser">
    <v-container>
      <v-row justify="center">
        <v-col sm="6" lg="3">
          <v-card elevation="0" class="login-appraiser__form">
            <h4 class="form__title">Entrar como avaliador</h4>
            <v-form @submit.prevent="login">
              <v-text-field
                class="form__input"
                dense
                v-model="email"
                label="Email"
                type="email"
                required
                :error-messages="emailErrors"
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              />
              <v-text-field
                class="form__input"
                dense
                v-model="password"
                label="Senha"
                type="password"
                required
                :error-messages="passwordError"
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
              />
              <v-btn color="primary" elevation="2" type="submit">Entrar</v-btn>
            </v-form>
            <div class="form__register">
              <h5 class="form-divisor">ou</h5>
              <h5 class="form-info">Crie uma conta</h5>
              <v-btn color="secondary" elevation="2" to="/appraiser/register">
                Cadastrar nova conta
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
