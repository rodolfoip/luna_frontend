<template>
  <v-app-bar class="header">
    <v-container>
      <v-row align="center">
        <v-col cols="auto">
          <v-img
            max-height="48"
            max-width="48"
            lazy-src="../../assets/images/luna_logo.png"
            src="../../assets/images/luna_logo.png"
            class="header__logo"
          ></v-img>
        </v-col>
        <v-col>
          <slot></slot>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
