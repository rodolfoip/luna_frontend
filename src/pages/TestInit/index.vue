<template>
  <div class="test-init">
    <Header>
      <v-row justify="space-between">
        <v-col cols="auto d-flex align-center">
          <div class="header__title">Teste XXX</div>
        </v-col>
        <v-col cols="auto">
          <v-btn small color="info" elevation="0">Sair</v-btn>
        </v-col>
      </v-row>
    </Header>
    <v-container>
      <v-row>
        <v-col cols="8" offset="2">
          <div class="test-init__content">
            <h2 class="test-init__title">Teste XXX</h2>
            <div class="test-init__description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                purus varius, malesuada sapien non, semper nibh. Nunc sodales
                velit id posuere condimentum. Integer eget sollicitudin turpis.
              </p>
              <p>
                Antes de iniciar o teste preencha o formulário de perfil,
                disponibilizado abaixo:
              </p>
              <a
                href="https://docs.google.com/forms/u/0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Questionário de perfil
              </a>
            </div>
          </div>
          <div class="test-init__action">
            <v-btn
              color="green white--text"
              elevation="0"
              to="/usability-test/task/init"
            >
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
