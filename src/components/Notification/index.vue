<template>
  <v-snackbar
    @input="hideNotification"
    :value="show"
    :timeout="timeout"
    right
    top
    :color="type"
  >
    {{ text }}
  </v-snackbar>
</template>

<script src="./script.js"></script>
