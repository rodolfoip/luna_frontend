<template>
  <div class="test-results">
    <Header>
      <v-row justify="space-between">
        <v-col cols="auto d-flex align-center">
          <div class="header__title">Teste {{ testSelected.name }}</div>
        </v-col>
        <v-col cols="auto">
          <v-btn
            small
            color="info darken-1"
            elevation="0"
            class="white--text"
            :to="`/usability-test/${testSelected._id}/task/list`"
          >
            Fechar resultados
          </v-btn>
        </v-col>
      </v-row>
    </Header>
    <v-container>
      <div class="test-results__content">
        <h2 class="test-results__title">Resultados gerais</h2>
        <v-row justify="center">
          <v-col cols="3" align="center">
            <v-card elevation="2" class="mb-6">
              <v-card-title class="justify-center">
                SUS - Satisfação
              </v-card-title>
              <v-card-text>
                <v-progress-circular
                  :rotate="360"
                  :size="100"
                  :width="15"
                  :value="averageSUS"
                  color="teal"
                >
                  {{ averageSUS }}
                </v-progress-circular>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="3" align="center">
            <v-card elevation="2" class="mb-6">
              <v-card-title class="justify-center"> Affect Grid </v-card-title>
              <v-card-text>
                <v-btn
                  elevation="0"
                  x-small
                  color="primary"
                  @click.stop="showAffectGrid(averageAffectGrid)"
                >
                  Visualizar
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="3" align="center">
            <v-card elevation="2" class="mb-6">
              <v-card-title class="justify-center"> Eficácia </v-card-title>
              <v-card-text>
                <v-progress-circular
                  :rotate="360"
                  :size="100"
                  :width="15"
                  :value="averageEffectiveness"
                  color="teal"
                >
                  {{ averageEffectiveness }}%
                </v-progress-circular>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <h2 class="test-results__title">Resultados por participante</h2>
        <v-data-table
          :headers="headers"
          :items="results"
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
