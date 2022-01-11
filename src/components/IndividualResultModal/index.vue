<template>
  <v-dialog
    content-class="individual-result-modal"
    v-model="isExpanded"
    @click:outside="closeDialog"
    max-width="700"
  >
    <v-card>
      <v-container>
        <v-data-table
          :headers="headers"
          :items="tasks"
          :items-per-page="5"
          class="elevation-1"
        >
          <template v-slot:item.aborted="{ item }">
            <v-chip v-if="item.aborted" small color="red" class="white--text">
              Não
            </v-chip>
            <v-chip v-else color="green" small class="white--text">
              Sim
            </v-chip>
          </template>
        </v-data-table>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script src="./script.js"></script>
