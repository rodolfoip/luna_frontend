<template>
  <div class="test-results">
    <Header>
      <v-row justify="space-between">
        <v-col cols="auto d-flex align-center">
          <div class="header__title">Teste XXX</div>
        </v-col>
        <v-col cols="auto">
          <v-btn
            small
            color="info darken-1"
            elevation="0"
            class="white--text"
            to="/usability-test/list"
          >
            Fechar resultados
          </v-btn>
        </v-col>
      </v-row>
    </Header>
    <v-container>
      <div class="test-results__content">
        <h2 class="test-results__title">Resultados do teste XXX</h2>
        <v-data-table
          :headers="headers"
          :items="tasks"
          :items-per-page="5"
          class="elevation-1"
        >
          <template v-slot:item.affectGrid="{ item }">
            <v-btn
              elevation="0"
              x-small
              color="primary"
              @click.stop="showAffectGrid(item.affectGrid)"
            >
              Visualizar
            </v-btn>
          </template>
        </v-data-table>
        <AffectGridModal
          :is-expanded="affectGrid.modal"
          :posInMatriz="affectGrid.posInMatriz"
          @close-dialog="affectGrid.modal = false"
        />
      </div>
    </v-container>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
