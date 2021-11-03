<template>
  <div class="test-init" v-if="testSelected">
    <Header>
      <v-row justify="space-between">
        <v-col cols="auto d-flex align-center">
          <div class="header__title">Teste: {{ testSelected.name }}</div>
          <div class="header__subtitle">Tarefa-{{ taskOrder }}</div>
        </v-col>
        <v-col cols="auto">
          <v-btn small color="info" elevation="0">Sair</v-btn>
        </v-col>
      </v-row>
    </Header>
    <v-container>
      <v-row>
        <v-col cols="8" offset="2">
          <div class="task-init__content" v-if="actualTask">
            <h2 class="task-init__title">Tarefa {{ taskOrder }}</h2>
            <div class="task-init__description">
              <p>
                {{ actualTask.description }}
              </p>
            </div>
          </div>
          <div class="task-init__action">
            <v-btn color="green white--text" elevation="0" @click="initTest">
              Iniciar
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
