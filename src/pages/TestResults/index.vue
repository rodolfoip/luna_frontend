<template>
  <div class="test-results">
    <Header>
      <v-row justify="space-between">
        <v-col cols="auto d-flex align-center">
          <div class="header__title">Teste XXX</div>
        </v-col>
        <v-col cols="auto">
          <v-btn small color="info darken-1" elevation="0" class="white--text">
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
          :items="items"
          :items-per-page="5"
          class="elevation-1"
          @click:row="openItem"
        >
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
          </template>
        </v-data-table>
      </div>
    </v-container>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
