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
          >
            Salvar
          </v-btn>
          <v-btn small color="info" class="mr-6" elevation="0">
            Adicionar tarefa
          </v-btn>
          <v-btn
            small
            color="blue-grey"
            class="white--text"
            elevation="0"
            to="/usability-test/list"
          >
            Voltar ao teste
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
            ></v-text-field>
          </v-col>
        </v-row>
        <v-textarea
          label="Escreva um roteiro para a tarefa"
          placeholder="roteiro"
          outlined
          dense
        >
        </v-textarea>
        <v-btn
          small
          color="green darken-1"
          elevation="0"
          class="mr-6 white--text"
        >
          Salvar
        </v-btn>
        <v-btn small color="info" elevation="0"> Adicionar tarefa </v-btn>
      </v-form>
    </v-container>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
