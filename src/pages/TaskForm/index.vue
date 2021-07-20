<template>
  <div class="task-form">
    <Header>
      <v-row justify="space-between">
        <v-col cols="auto d-flex align-center">
          <div class="header__title">Teste XXX</div>
          <div class="header__subtitle">Questionário SUS</div>
        </v-col>
        <v-col cols="auto">
          <v-btn small color="green white--text" elevation="0">Finalizar</v-btn>
        </v-col>
      </v-row>
    </Header>
    <v-container>
      <div class="task-form__content">
        <v-row>
          <v-col cols="8" offset="2">
            <h2 class="task-form__title">Preencha o questionário abaixo</h2>
            <div class="task-form__subtitle">
              Em uma escala de 1 a 5, onde 1 significa Discordo Completamente e
              5 significa Concordo Completamente
            </div>

            <v-form>
              <fieldset
                class="form-group"
                v-for="(question, index) in formQuestions"
                :key="index"
              >
                <h4 class="form-group__label">
                  {{ index + 1 }} - {{ question.label }}
                </h4>
                <v-radio-group v-model="question.answer" row class="mt-1">
                  <v-radio
                    v-for="n in 5"
                    :key="n"
                    :label="`${n}`"
                    :value="n"
                  ></v-radio>
                </v-radio-group>
              </fieldset>
            </v-form>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
