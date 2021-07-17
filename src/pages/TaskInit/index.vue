<template>
  <div class="test-init">
    <Header>
      <v-row justify="space-between">
        <v-col cols="auto d-flex align-center">
          <div class="header__title">Teste XXX</div>
          <div class="header__subtitle">Tarefa-1</div>
        </v-col>
        <v-col cols="auto">
          <v-btn small color="info" elevation="0">Sair</v-btn>
        </v-col>
      </v-row>
    </Header>
    <v-container>
      <v-row>
        <v-col cols="8" offset="2">
          <div class="task-init__content">
            <h2 class="task-init__title">Tarefa 1</h2>
            <div class="task-init__description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                purus varius, malesuada sapien non, semper nibh. Nunc sodales
                velit id posuere condimentum. Integer eget sollicitudin turpis.
                In pellentesque lectus sit amet orci tempus gravida. Suspendisse
                quis cursus velit. Donec non nisl at risus pretium consequat.
                Sed aliquet lacus vitae euismod venenatis. Nullam a cursus
                metus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                purus varius, malesuada sapien non, semper nibh. Nunc sodales
                velit id posuere condimentum. Integer eget sollicitudin turpis.
                In pellentesque lectus sit amet orci tempus gravida. Suspendisse
                quis cursus velit. Donec non nisl at risus pretium consequat.
                Sed aliquet lacus vitae euismod venenatis. Nullam a cursus
                metus.
              </p>
            </div>
          </div>
          <div class="task-init__action">
            <v-btn color="green white--text" elevation="0">Iniciar</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
