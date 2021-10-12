<template>
  <div class="task-register">
    <Header>
      <v-row justify="space-between">
        <v-col cols="auto d-flex align-center">
          <div class="header__title">Teste XXX</div>
          <div class="header__subtitle">Adicionar nova tarefa</div>
        </v-col>
        <v-col cols="auto">
          <v-btn
            small
            color="green darken-1"
            elevation="0"
            class="mr-6 white--text"
            @click="save"
          >
            Salvar
          </v-btn>
          <v-btn
            small
            color="info"
            class="mr-6"
            elevation="0"
            @click="addNewTask"
          >
            Adicionar tarefa
          </v-btn>
          <v-btn
            small
            color="blue-grey"
            class="white--text"
            elevation="0"
            :to="taskListRoute"
          >
            Ver tarefas
          </v-btn>
        </v-col>
      </v-row>
    </Header>
    <v-container>
      <v-form class="pt-10">
        <v-row>
          <v-col lg="2" cols="4">
            <v-text-field
              label="Ordem da tarefa"
              placeholder="ordem"
              outlined
              dense
              v-model="form.order"
              :error-messages="orderErrors"
              @input="$v.form.order.$touch()"
              @blur="$v.form.order.$touch()"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-textarea
          label="Escreva um roteiro para a tarefa"
          placeholder="roteiro"
          outlined
          dense
          v-model="form.description"
          :error-messages="descriptionErrors"
          @input="$v.form.description.$touch()"
          @blur="$v.form.description.$touch()"
        >
        </v-textarea>
        <v-btn
          small
          color="green darken-1"
          elevation="0"
          class="mr-6 white--text"
          @click="saveTask"
        >
          Salvar
        </v-btn>
        <v-btn small color="info" elevation="0" @click="addNewTask">
          Adicionar tarefa
        </v-btn>
      </v-form>
    </v-container>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
