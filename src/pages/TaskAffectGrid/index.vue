<template>
  <div class="task-affect-grid">
    <Notification
      :show="alertConfig.show"
      :type="alertConfig.type"
      :text="alertConfig.text"
      @hide-notification="() => (alertConfig.show = false)"
    />
    <Header>
      <v-row justify="space-between">
        <v-col cols="auto d-flex align-center">
          <div class="header__title">{{ this.testName }}</div>
          <div class="header__subtitle">Preencha o AffectGrid</div>
        </v-col>
        <v-col cols="auto">
          <v-btn
            small
            color="green white--text"
            elevation="0"
            @click="saveAffectGrid"
          >
            Finalizar
          </v-btn>
        </v-col>
      </v-row>
    </Header>
    <v-container>
      <div class="task-affect-grid__content">
        <v-row>
          <v-col cols="10" offset="1">
            <h2 class="task-affect-grid__title">Preencha o Affect Grid</h2>
            <AffectGrid
              clickable
              :posInMatriz="posInMatriz"
              @on-click-position="setPosition"
            />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
