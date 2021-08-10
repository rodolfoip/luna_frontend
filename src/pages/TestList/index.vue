<template>
  <div class="test-list">
    <Header>
      <v-btn
        small
        color="green darken-1"
        elevation="0"
        class="white--text"
        to="/usability-test/register"
      >
        Criar teste
      </v-btn>
    </Header>
    <v-container>
      <div class="test-list__content">
        <h2 class="test-list__title">Lista de testes</h2>
        <v-data-table
          :headers="headers"
          :items="items"
          :items-per-page="5"
          class="elevation-1"
          @click:row="openItem"
        >
          <template v-slot:item.realized="{ item }">
            <v-chip
              :color="item.realized ? 'green' : 'red'"
              class="white--text"
            >
              {{ item.realized ? "Sim" : "Não" }}
            </v-chip>
          </template>
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
