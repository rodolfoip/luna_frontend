<template>
  <div class="login-participant">
    <Notification
      :show="alertConfig.show"
      :type="alertConfig.type"
      :text="alertConfig.text"
      @hide-notification="() => (alertConfig.show = false)"
    />
    <v-container>
      <v-row justify="center">
        <v-col sm="10" md="6" lg="5" xl="3">
          <v-form @submit.prevent="initTest">
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
                  :error-messages="accessCodeError"
                  @input="$v.accessCode.$touch()"
                  @blur="$v.accessCode.$touch()"
                  @keypress.enter.prevent
                ></v-text-field>
              </v-form>
              <v-btn
                color="primary"
                elevation="2"
                type="submit"
                class="form__button"
              >
                Entrar
              </v-btn>
              <h5 class="form-divisor">ou</h5>
              <v-btn
                color="green darken-1"
                elevation="2"
                to="/appraiser"
                class="mt-4 white--text form__button"
              >
                Entrar como avaliador
              </v-btn>
            </v-card>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
