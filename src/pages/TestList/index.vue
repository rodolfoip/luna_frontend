<template>
  <div class="test-list">
    <Notification
      :show="alertConfig.show"
      :type="alertConfig.type"
      :text="alertConfig.text"
      @hide-notification="() => (alertConfig.show = false)"
    />
    <Header>
      <v-row class="flex-fill">
        <v-col cols="flex-fill">
          <v-btn
            small
            color="green darken-1"
            elevation="0"
            class="white--text"
            to="/usability-test/register"
          >
            Criar teste
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            small
            color="blue-grey"
            class="white--text ml-auto"
            @click="logout"
          >
            Sair da conta
          </v-btn>
        </v-col>
      </v-row>
    </Header>
    <v-container>
      <div class="test-list__content">
        <h2 class="test-list__title">Lista de testes</h2>
        <v-data-table
          :headers="headers"
          :items="listTests"
          :items-per-page="15"
          class="elevation-1"
          @click:row="openTaskList"
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
            <v-icon small class="mr-2" @click.stop="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click.stop="deleteItem(item)"> mdi-delete </v-icon>
          </template>
        </v-data-table>
      </div>
    </v-container>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
