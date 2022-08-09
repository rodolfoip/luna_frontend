<template>
  <div class="task-list">
    <Notification
      :show="alertConfig.show"
      :type="alertConfig.type"
      :text="alertConfig.text"
      @hide-notification="() => (alertConfig.show = false)"
    />
    <Header>
      <div class="d-flex flex-row-reverse">
        <v-btn
          small
          color="blue-grey"
          elevation="0"
          class="white--text"
          to="/usability-test/list"
        >
          Voltar
        </v-btn>
      </div>
    </Header>
    <v-container>
      <div class="task-list__content">
        <h2 class="task-list__title">
          Lista de tarefas - {{ this.testSelected.name }}
        </h2>
        <v-data-table
          :headers="headers"
          :items="testTasks"
          :items-per-page="15"
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
        <v-btn
          v-if="testSelected"
          color="blue-grey"
          elevation="0"
          class="white--text mt-6 ml-6"
          :disabled="!results.length"
          :to="taskResultsRoute"
        >
          Ver resultados
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
