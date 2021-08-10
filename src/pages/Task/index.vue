<template>
  <div class="task">
    <v-expansion-panels class="task-menu">
      <v-expansion-panel>
        <v-expansion-panel-header class="task-menu__header">
          <div class="text">
            <v-icon left>mdi-menu</v-icon>
            Menu - Teste XXX <small class="ml-4">(clique para expandir)</small>
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="task-menu__content">
          <v-row>
            <v-col lg="8" offset="2">
              <h3 class="title">Teste XXX - Tarefa 1</h3>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
              <div class="action">
                <v-btn
                  elevation="2"
                  color="red white--text"
                  class="mr-4"
                  @click="abort"
                >
                  Abortar
                </v-btn>
                <v-btn elevation="2" color="green white--text" @click="finish">
                  Finalizar
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <div style="height: auto">
      <input type="text" style="position: fixed; top: -1000px; left: -1000px" />
      <iframe
        id="show-iframe"
        frameborder="0"
        scrolling="yes"
        style="background-color:transparent; position：absolute;width: 100%;
         height:100%; top: 0;left:0;bottom:0;"
        :src="prototype_link"
        @load="onLoadPrototype"
      ></iframe>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
