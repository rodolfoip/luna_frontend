<template>
  <div class="test-register">
    <Header>
      <v-row justify="space-between">
        <v-col cols="auto d-flex align-center">
          <div class="header__title">Teste XXX</div>
          <div class="header__subtitle">Protótipo</div>
        </v-col>
        <v-col cols="auto">
          <v-btn
            small
            color="green darken-1"
            elevation="0"
            class="mr-6 white--text"
            @click="saveTest"
          >
            Salvar
          </v-btn>
          <v-btn small color="info" elevation="0" @click="addTask">
            Adicionar tarefas
          </v-btn>
        </v-col>
      </v-row>
    </Header>
    <v-container>
      <v-form class="pt-10">
        <v-row>
          <v-col cols="4">
            <v-text-field
              label="Nome do teste"
              placeholder="Nome"
              outlined
              dense
              v-model="form.name"
              :error-messages="nameErrors"
              @input="$v.form.name.$touch()"
              @blur="$v.form.name.$touch()"
            ></v-text-field>
            <v-text-field
              v-if="!isEditPage"
              label="Código de acesso ao teste"
              placeholder="Código"
              outlined
              dense
              v-model="form.accessCode"
              :error-messages="codeErrors"
              @input="$v.form.accessCode.$touch()"
              @blur="$v.form.accessCode.$touch()"
            >
            </v-text-field>
            <v-btn
              v-if="!isEditPage"
              color="secondary"
              small
              elevation="0"
              class="mb-6"
            >
              Gerar código
            </v-btn>
            <v-text-field
              label="Link para questionário de perfil (externo)"
              placeholder="Link"
              outlined
              dense
              :error-messages="externalLinkError"
              v-model="form.externalLink"
              @input="$v.form.externalLink.$touch()"
              @blur="$v.form.externalLink.$touch()"
            ></v-text-field>
          </v-col>
          <v-col cols="4" offset="1">
            <v-text-field
              label="Link do teste"
              placeholder="Link"
              outlined
              dense
              :error-messages="prototypeLinkError"
              v-model="form.prototypeLink"
              @input="$v.form.prototypeLink.$touch()"
              @blur="$v.form.prototypeLink.$touch()"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script src="./script.js"></script>
