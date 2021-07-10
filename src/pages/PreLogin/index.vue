<template>
  <div class="pre-login">
    <v-container>
      <v-row align="center" justify="space-between">
        <v-col sm="10" lg="6" offset-sm="1" offset-lg="3">
          <h1 class="pre-login__title">Deseja entrar como?</h1>
          <div class="pre-login__description">
            <p>
              Ao entrar como avaliador, você poderá criar testes ou visualizar
              resultados dos testes já realizados
            </p>
            <p>
              Ao entrar como participante, você poderá participar de um teste
            </p>
          </div>
          <div class="pre-login__content">
            <v-row no-gutters>
              <v-col class="pre-login__content--avaliador">
                <v-card elevation="0" class="login-type">
                  <v-card-text class="login-type__content">
                    <h4 class="login-type-title">Avaliador</h4>
                    <v-img
                      max-height="64"
                      max-width="64"
                      lazy-src="../../assets/icons/avaliador-login.png"
                      src="../../assets/icons/avaliador-login.png"
                    ></v-img>
                  </v-card-text>
                  <v-card-actions class="login-type__actions">
                    <v-btn color="primary" elevation="2">Entrar</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col class="pre-login__content--participante">
                <v-card elevation="0" class="login-type">
                  <v-card-text class="login-type__content">
                    <h4 class="login-type-title">Participante</h4>
                    <v-img
                      max-height="64"
                      max-width="64"
                      lazy-src="../../assets/icons/participante-login.png"
                      src="../../assets/icons/participante-login.png"
                    ></v-img>
                  </v-card-text>
                  <v-card-actions class="login-type__actions">
                    <v-btn color="primary" elevation="2">Entrar</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
