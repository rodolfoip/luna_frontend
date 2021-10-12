<template>
  <div class="task-list">
    <Notification
      :show="alertConfig.show"
      :type="alertConfig.type"
      :text="alertConfig.text"
      @hide-notification="() => (alertConfig.show = false)"
    />
    <Header>
      <v-btn
        small
        color="green darken-1"
        elevation="0"
        class="white--text"
        :to="taskRegisterRoute"
      >
        Adicionar tarefa
      </v-btn>
      <v-btn
        small
        color="blue-grey"
        elevation="0"
        class="white--text ml-4"
        to="/usability-test/list"
      >
        Ver testes
      </v-btn>
    </Header>
    <v-container>
      <div class="task-list__content">
        <h2 class="task-list__title">Lista de tarefas</h2>
        <v-data-table
          :headers="headers"
          :items="items"
          :items-per-page="5"
          class="elevation-1"
          :single-expand="singleExpand"
          :expanded.sync="expanded"
          item-key="order"
          show-expand
        >
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              {{ item.description }}
            </td>
          </template>
          <template v-slot:item.description="{ item }">
            {{ item.description.slice(0, 130) }}...
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
          </template>
        </v-data-table>
        <v-btn
          color="green darken-1 mt-6"
          elevation="0"
          class="white--text"
          :to="taskRegisterRoute"
        >
          Adicionar tarefa
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
