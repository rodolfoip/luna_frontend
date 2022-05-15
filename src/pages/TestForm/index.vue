<template>
  <div class="test-register">
    <Notification
      :show="alertConfig.show"
      :type="alertConfig.type"
      :text="alertConfig.text"
      @hide-notification="() => (alertConfig.show = false)"
    />
    <Header>
      <v-row justify="space-between">
        <v-col cols="auto d-flex align-center">
          <div class="header__title">{{ testName }}</div>
          <div class="header__subtitle">Protótipo</div>
        </v-col>
        <v-col cols="auto">
          <v-btn
            small
            color="blue-grey"
            elevation="0"
            class="mr-6 white--text"
            to="/usability-test/list"
          >
            Voltar
          </v-btn>
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
              :disabled="isEditPage"
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
            <!-- TODO - Implementar função para gerar código aleatório que ainda não existe -->
            <v-btn
              v-if="!isEditPage && false"
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
            <a
              v-if="form.prototypeLink"
              :href="form.prototypeLink"
              target="_blank"
              no-referer
              class="d-block mb-4"
            >
              Link para o protótipo da interface
            </a>
            <v-btn
              small
              color="yellow accent-4"
              elevation="0"
              @click="removePrototypeLink"
              v-show="form.prototypeLink"
            >
              Remover protótipo
            </v-btn>
            <v-file-input
              accept="application/pdf"
              label="Arquivo protótipo da interface, é obrigatório utilizar .pdf"
              outlined
              dense
              v-show="!form.prototypeLink"
              v-model="form.prototypeFile"
              :disabled="!nameCodeAreFilled"
              :messages="prototypeFileError"
              :error-messages="prototypeLinkError"
            ></v-file-input>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script src="./script.js"></script>
