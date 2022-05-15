<template>
  <div class="task-finished text-center">
    <Header>
      <v-row justify="space-between">
        <v-col cols="auto d-flex align-center">
          <div class="header__title">Fim da avaliação</div>
        </v-col>
        <v-col cols="auto">
          <v-btn small color="info" elevation="0" to="/">Sair</v-btn>
        </v-col>
      </v-row>
    </Header>
    <v-container>
      <v-row>
        <v-col cols="8" offset="2">
          <h1 class="title mt-15 mb-6">Obrigado por participar da avaliação</h1>
          <div class="description">
            <p>Você chegou ao fim da avaliação, obrigado pela participação.</p>
            <p>
              Os resultados ficarão disponível apenas para o avaliador, e são
              anônimos.
            </p>
          </div>
          <v-btn color="info" elevation="0" to="/" class="mt-6">Sair</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script src="./script.js"></script>
