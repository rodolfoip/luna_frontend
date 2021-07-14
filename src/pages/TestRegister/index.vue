<template>
  <div class="test-register">
    <v-app-bar class="header">
      <v-container>
        <v-row align="center">
          <v-col cols="auto">
            <v-img
              max-height="48"
              max-width="48"
              lazy-src="../../assets/images/luna_logo.png"
              src="../../assets/images/luna_logo.png"
              class="header__logo"
            ></v-img>
          </v-col>
          <v-col>
            <v-row justify="space-between">
              <v-col cols="auto d-flex align-center">
                <div class="header__title">Teste XXX</div>
                <div class="header__subtitle">Protótipo</div>
              </v-col>
              <v-col cols="auto">
                <v-btn
                  small
                  color="green darken-1"
                  elevation="0"
                  class="mr-6 white--text"
                >
                  Salvar
                </v-btn>
                <v-btn small color="info" elevation="0">
                  Adicionar tarefas
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-container>
      <v-form class="pt-10">
        <v-row>
          <v-col cols="4">
            <v-text-field
              label="Nome do teste"
              placeholder="Nome"
              outlined
              dense
            ></v-text-field>
            <v-text-field
              label="Código de acesso ao teste"
              placeholder="Código"
              outlined
              dense
            >
            </v-text-field>
            <v-btn color="secondary" small elevation="0" class="mb-6">
              Gerar código
            </v-btn>
            <v-text-field
              label="Link para questionário de perfil (externo)"
              placeholder="Link"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="4" offset="1">
            <v-text-field
              label="Link do teste"
              placeholder="Link"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
