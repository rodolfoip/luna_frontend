<template>
  <div class="test-init">
    <Header>
      <v-row justify="space-between">
        <v-col cols="auto d-flex align-center">
          <div class="header__title">Teste XXX</div>
        </v-col>
        <v-col cols="auto">
          <v-btn small color="info" elevation="0" to="/">Sair</v-btn>
        </v-col>
      </v-row>
    </Header>
    <v-container>
      <v-row v-if="testSelected">
        <v-col cols="8" offset="2">
          <div class="test-init__content">
            <h2 class="test-init__title">Teste: {{ testSelected.name }}</h2>
            <div class="test-init__description">
              <p>
                Ao clicar em iniciar, você estará aceitando participar deste
                teste, cujo objetivo é coletar informações tais como, tempo de
                realização das tarefas, um questionário de satisfação de uso e o
                preenchimento de uma matriz para registrar o sentimento sentido
                durante o teste.
              </p>
              <p>
                Caso você não deseje realizar o teste, é possível sair do teste
                clicando em sair no canto superior direito da tela.
              </p>
              <p>
                Antes de iniciar o teste preencha o formulário de perfil,
                disponibilizado abaixo:
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                :href="testSelected.externalLink"
              >
                Questionário de perfil
              </a>
            </div>
          </div>
          <div class="test-init__action">
            <v-btn color="green white--text" elevation="0" :to="taskInitRoute">
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
