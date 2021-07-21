<template>
  <v-dialog
    content-class="affect-grid-modal"
    v-model="isExpanded"
    @click:outside="closeDialog"
    max-width="1000"
  >
    <v-card>
      <v-container>
        <AffectGrid :pos-in-matriz="posInMatriz" />
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
