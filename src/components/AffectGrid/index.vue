<template>
  <div class="affect-grid">
    <v-row align="center">
      <v-col cols="3" class="text-right">ESTRESSE</v-col>
      <v-col cols="6" class="text-center">ALTA EXCITAÇÃO</v-col>
      <v-col cols="3">EXCITAÇÃO</v-col>
      <v-col cols="3" class="text-right">DESAGRADÁVEL</v-col>
      <v-col cols="6" class="text-center">
        <div class="matriz">
          <div
            class="matriz__item"
            :class="{ active: item === posInMatriz }"
            v-for="item in 81"
            :key="item"
          >
            <span class="d-none">{{ item }}</span>
          </div>
        </div>
      </v-col>
      <v-col cols="3">SENTIMENTO AGRADÁVEL</v-col>
      <v-col cols="3" class="text-right">DEPRESSÃO</v-col>
      <v-col cols="6" class="text-center">SONOLÊNCIA</v-col>
      <v-col cols="3">RELAXAMENTO</v-col>
    </v-row>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
