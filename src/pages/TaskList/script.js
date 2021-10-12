import { mapGetters } from "vuex";

import Header from "@/components/Header";
import Notification from "@/components/Notification";
import { getTestById } from "@/services/test";
import { deleteTask } from "@/services/task";

export default {
  name: "TestList",

  components: {
    Header,
    Notification,
  },

  computed: {
    ...mapGetters({
      testSelected: "test/testSelected",
    }),
    testId() {
      return this.$route.params.id;
    },
  },

  data() {
    return {
      expanded: [],
      singleExpand: false,
      headers: [
        { text: "Ordem", align: "start", value: "order" },
        { text: "Description", value: "description" },
        { text: "Ações", value: "actions", sortable: false },
      ],
      items: [],
      testRegisterRoute: {
        name: "TaskRegister",
        params: {
          id: this.testId,
        },
      },
      alertConfig: {
        show: false,
        timeout: 2000,
        type: "success",
        text: "Tarefa excluída com sucesso",
      },
    };
  },

  mounted() {
    this.loadTasks();
  },

  methods: {
    loadTasks() {
      if (this.testSelected) {
        this.items = this.testSelected.tasks;
      } else {
        getTestById(this.testId).then((response) => {
          const { data } = response;
          this.items = data.usabilityTest.tasks;
        });
      }
    },
    openItem(item) {
      console.log(item);
    },
    editItem(item) {
      console.log(item);
    },
    deleteItem(item) {
      deleteTask({ testId: this.testId, order: item.order })
        .then(() => {
          this.alertConfig.show = true;
        })
        .catch(({ response }) => {
          this.alertConfig.text = response.data.error;
          this.alertConfig.type = "red accent-4";
          this.alertConfig.show = true;
        })
        .finally(() => {
          getTestById(this.testId).then((response) => {
            const { data } = response;
            this.items = data.usabilityTest.tasks;
          });
        });
    },
  },
};
