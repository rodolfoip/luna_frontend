import Header from "@/components/Header";
import Notification from "@/components/Notification";
import { deleteTask } from "@/services";
import { test } from "@/mixins/Test";
import { result } from "@/mixins/Result";

export default {
  name: "TestList",

  components: {
    Header,
    Notification,
  },

  mixins: [test, result],

  computed: {
    taskRegisterRoute() {
      return {
        name: "TaskRegister",
        params: {
          id: this.testId,
        },
      };
    },
    taskResultsRoute() {
      return {
        name: "TestResults",
        params: {
          id: this.testId,
        },
      };
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
      alertConfig: {
        show: false,
        timeout: 2000,
        type: "success",
        text: "Tarefa excluída com sucesso",
      },
    };
  },

  methods: {
    editItem(item) {
      this.$router.push({
        name: "TaskEdit",
        params: { id: this.testId, order: item.order },
      });
    },
    async deleteItem(item) {
      await deleteTask({
        userId: this.userId,
        testId: this.testId,
        order: item.order,
      })
        .then(() => {
          this.alertConfig.show = true;
        })
        .catch(({ response }) => {
          this.alertConfig.text = response.data.error;
          this.alertConfig.type = "red accent-4";
          this.alertConfig.show = true;
        })
        .finally(() => {
          this.getTest();
        });
    },
  },
};
